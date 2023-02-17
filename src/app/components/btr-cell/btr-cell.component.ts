import { Component, Input, OnInit } from '@angular/core';
import { ModuleCell } from 'src/app/_models/module-cell.model';
import { defaultValues } from 'src/app/_utils/default-values.util';

@Component({
  selector: 'app-btr-cell',
  templateUrl: './btr-cell.component.html',
  styleUrls: ['./btr-cell.component.scss']
})
export class BtrCellComponent implements OnInit {

  @Input() cell : ModuleCell = this.emptyCell

  constructor() { }

  ngOnInit(): void {
  }

  get emptyCell () : ModuleCell {
    return {
      cellId: null,
      voltage: 0
    } as ModuleCell
  }

  // get barWidthStyle () {
  //   return `{'width' : ${}}`
  // }

  get percentage(){
    return (this.cell.voltage-defaultValues.minCellVoltage) / (defaultValues.maxCellVoltage - defaultValues.minCellVoltage) *100
  }

}
