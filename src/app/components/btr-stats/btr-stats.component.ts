import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { interval, Subscription } from 'rxjs';
import { BmsInfo } from 'src/app/_models/bms-info.model';
import { DataService } from 'src/app/_services/data.service';
import { TimeDifferenceStructuredInterval, transformTimeDiff } from 'src/app/_utils/date-and-time.util';

@Component({
  selector: 'app-btr-stats',
  templateUrl: './btr-stats.component.html',
  styleUrls: ['./btr-stats.component.scss']
})
export class BtrStatsComponent implements OnInit, OnDestroy {

  sub : Subscription[] = []
  isLoading : boolean = true

  bmsInfo : BmsInfo | undefined

  lastUpdate : number = Date.now()
  showLastUpdateInfo : TimeDifferenceStructuredInterval = {seconds: 0, minutes: 0, hours: 0, days: 0}

  showLastUpdateRefreshRate = 1 // time in seconds
  showLastUpdateRefreshIntervals$ = interval(this.showLastUpdateRefreshRate * 1000)
  autoRefreshInterval = 5 // time in minutes

  editMode : boolean = false
  form: FormGroup = new FormGroup({interval: new FormControl(this.autoRefreshInterval, Validators.min(1))},)

  constructor(
    private dataService: DataService
  ){}

  ngOnInit(): void {
    this.sub.push(this.dataService.lastData$.subscribe(
      data => {
        if (data && data.bmsInfo){
          this.lastUpdate = data.timeStamp
          this.bmsInfo = data.bmsInfo
        }
        this.isLoading = false
      }
    ))
    this.sub.push(this.showLastUpdateRefreshIntervals$.subscribe(
      (data: number) => {
        if ((Date.now() - this.lastUpdate) / 1000 / 60 >= this.autoRefreshInterval){
          this.refreshData()
          this.lastUpdate = Date.now()
        } 
        this.showLastUpdateInfo = transformTimeDiff(Date.now() - this.lastUpdate)
      }
    ))
  }

  get batteryVoltage(){
    return this.bmsInfo ? this.bmsInfo.batteryVoltage : 0
  }

  get batteryDelta(){
    return this.bmsInfo ? this.bmsInfo.batteryDelta : 0
  }

  get batteryCurrent(){
    return this.bmsInfo ? this.bmsInfo.batteryCurrent : 0
  }

  get batterySOC(){
    return this.bmsInfo ? this.bmsInfo.soc : 0
  }

  get batteryPower(){
    // in kW
    if (this.bmsInfo){
      return Math.abs(this.bmsInfo.batteryVoltage * this.bmsInfo.batteryCurrent) / 1000
    }
    return 0
  }

  get contactorState(){
    return this.bmsInfo?.contactorState ? 'on' : 'off'
  }

  onRefresh(){
    this.refreshData()
  }

  private refreshData(){
    this.isLoading = true
    this.dataService.getAllData()
  }

  toggleEdit(){
    this.editMode = !this.editMode
    if (!this.editMode){
      this.form.get('interval')?.setValue(this.autoRefreshInterval)
    }
  }

  onSubmit(){
    if (this.form.valid) {
      this.autoRefreshInterval = this.form.get('interval')?.value ? this.form.get('interval')?.value : this.autoRefreshInterval
      this.editMode = false
    }
  }

  ngOnDestroy(): void {
    this.sub.forEach(it => {
      it.unsubscribe()
    })
  }
}
