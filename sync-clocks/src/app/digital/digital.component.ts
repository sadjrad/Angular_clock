import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import {ClockService} from '../clock.service';

@Component({
  selector: 'app-digital',
  templateUrl: './digital.component.html',
  styleUrls: ['./digital.component.css'],
})
export class DigitalComponent implements OnInit {

  /*private currentTime = new Date();*/
  public diem : string;
  public h : any;
  public m : string;
  public s : string;
  public adtime = false;


  //Use of clock service
  clockService: ClockService;

  constructor(clockService: ClockService) {
    this.clockService = clockService;
  }

  ngOnInit(): void {
    //Every one second get data.
    setInterval(() => {
       //Get hour and  minute ans second from our service clock
      if(this.adtime){
       this.h = this.clockService.getDataUpdate().h;
       this.m = this.clockService.getDataUpdate().m;
       this.s = this.clockService.getDataUpdate().s;
       this.diem = this.clockService.getDataUpdate().diem;
      }
      else{
       this.h = this.clockService.getData().h;
       this.m = this.clockService.getData().m;
       this.s = this.clockService.getData().s;
       this.diem = this.clockService.getData().diem;
      }
    }, 1000);

  }

  onUpdateTime(){
    this.adtime = true;
  }

}

