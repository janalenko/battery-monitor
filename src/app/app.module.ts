import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BtrStatsComponent } from './components/btr-stats/btr-stats.component';
import { BtrModuleComponent } from './components/btr-module/btr-module.component';
import { BtrCellComponent } from './components/btr-cell/btr-cell.component';
import { BtrInfoComponent } from './components/btr-info/btr-info.component';
import { ChargeBarComponent } from './components/charge-bar/charge-bar.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BtrStatsComponent,
    BtrModuleComponent,
    BtrCellComponent,
    BtrInfoComponent,
    ChargeBarComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
