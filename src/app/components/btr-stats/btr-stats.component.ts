import { Component, OnDestroy, OnInit } from '@angular/core';
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

  ngOnDestroy(): void {
    this.sub.forEach(it => {
      it.unsubscribe()
    })
  }
}
