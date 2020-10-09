import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnalogComponent } from './analog/analog.component';
import { DigitalComponent } from './digital/digital.component';
import {ClockService} from './clock.service';

@NgModule({
  declarations: [
    AppComponent,
    AnalogComponent,
    DigitalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ClockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
