import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  // templateUrl: './spinner.component.html',
  template: `
  <div>
  <span [class.o-0]="!show">
    <svg [ngClass]="color" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="o-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="o-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  </span>
</div>
`,
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  @Input() show: boolean = true

  @Input() color: string = 'text-quaternary'

  constructor() { }

  ngOnInit(): void {
  }

}
