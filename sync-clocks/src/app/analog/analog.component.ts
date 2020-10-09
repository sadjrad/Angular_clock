import { Component, OnInit} from '@angular/core';
import {ClockService} from '../clock.service';

import * as $ from 'jquery';

@Component({
  selector: 'app-analog',
  templateUrl: './analog.component.html',
  styleUrls: ['./analog.component.css']
})
export class AnalogComponent implements OnInit {


  //Use of clock service
  clockService: ClockService;

  constructor(clockService: ClockService) {
    this.clockService = clockService;
  }

  ngOnInit(): void {
    //set hour, second, minute hand animation every one second.
    setInterval(() => {
      if (this.clockService.updateState){
        //Get hour and  minute ans second in milisecond fron our service clock
        this.setTime(60 * this.clockService.getDataUpdate().as, "second");
        this.setTime(3600 * this.clockService.getDataUpdate().am, "minute");
        this.setTime(43200 * this.clockService.getDataUpdate().ah, "hour");

      }
      else
      {
        //Get hour and  minute ans second in milisecond fron our service clock
        this.setTime(60 * this.clockService.getData().as, "second");
        this.setTime(3600 * this.clockService.getData().am, "minute");
        this.setTime(43200 * this.clockService.getData().ah, "hour");
      }


   }, 1000);


  }

  //manage clock animation to show time
  public setTime(left, hand) {
    $(".clock__" + hand).css("animation-delay", "" + left * -1 + "s");
  }

}
