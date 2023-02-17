import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-charge-bar',
  templateUrl: './charge-bar.component.html',
  styleUrls: ['./charge-bar.component.scss']
})
export class ChargeBarComponent implements OnInit {

  @Input() percentage: number = 100

  constructor() { }

  ngOnInit(): void {
  }

  get setBarColor(){
    return `linear-gradient(to right, transparent ${this.percentage}%, white ${this.percentage}% 100%)`
  }

}
