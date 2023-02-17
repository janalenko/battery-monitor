import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { BmsInfo } from 'src/app/_models/bms-info.model';
import { DataService } from 'src/app/_services/data.service';
import { TimeDifferenceStructuredInterval, transformTimeDiff } from 'src/app/_utils/date-and-time.util';

@Component({
  selector: 'app-btr-info',
  templateUrl: './btr-info.component.html',
  styleUrls: ['./btr-info.component.scss']
})
export class BtrInfoComponent implements OnInit, OnDestroy {

  sub = new Subscription()
  // bmsData : BmsData | undefined
  bmsInfo : BmsInfo | undefined

  constructor(
    private dataService : DataService
  ) { }

  ngOnInit(): void {
    this.sub = this.dataService.lastData$.subscribe(
      data => {
        if (data){
          this.bmsInfo = data.bmsInfo;
        }
      }
    )
  }

  get modules() {
    return this.bmsInfo?.modules
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

}
