import { Component, Input, OnInit } from '@angular/core';
import { BatteryModule } from 'src/app/_models/battery-module.model';

@Component({
  selector: 'app-btr-module',
  templateUrl: './btr-module.component.html',
  styleUrls: ['./btr-module.component.scss']
})
export class BtrModuleComponent implements OnInit {

  @Input() module : BatteryModule = this.emptyModule

  constructor() { }

  ngOnInit(): void {
  }

  get emptyModule () : BatteryModule {
    return {
      moduleId: null,
      cells: [],
      temperature: 0
    } as BatteryModule
  }

  get cells () {
    return this.module.cells
  }

  get mVoltage () {
    return this.module.cells.map(it => it.voltage).reduce((acc,cv) => acc + cv, 0)
  }

  get mDelta () {
    return Math.max(...this.module.cells.map(it => it.voltage)) - Math.min(...this.module.cells.map(it => it.voltage))
  }

  get mTemp () {
    return this.module.temperature
  }

}
