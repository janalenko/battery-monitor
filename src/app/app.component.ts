import { Component } from '@angular/core';
import { DataService } from './_services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private dataService : DataService
  ){

  }

  ngOnInit(): void{
    this.dataService.getAllData()
  }
}
