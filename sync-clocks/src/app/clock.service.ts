import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClockService {

  //Properties
  private diem : string;
  private hours : any;
  private minutes : string;
  private seconds : string;
  private currentSec : number;
  private ahours : number;
  private aminutes : number;
  private aseconds : number;
  private currentDate: Date;
  public updateState : boolean = false;



  constructor() { }
  //Methode to Calculate Hour Minute and Second and formating data for rendering in digital clock
  private updateTime() {

    //const currentDate = new Date();
    const hours = this.currentDate.getHours();
    this.diem = hours >= 12 ? 'PM' : 'AM';
    this.hours = hours % 12;
    this.hours = this.hours ? this.hours : 12;
    this.hours = this.hours < 10 ? '0' + this.hours : this.hours;

    const minutes = this.currentDate.getMinutes();
    this.minutes = minutes < 10 ? '0' + minutes : minutes.toString();

    const seconds = this.currentDate.getSeconds();
    this.seconds = seconds < 10 ? '0' + seconds : seconds.toString();


  }
  //Methode to Calculate Hour Minute and Second in miliseconds and formating data for rendering in analogic clock
  private getSecondsToday() {
    let now:any = this.currentDate;
    let today:any = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let diff = now - today;
    this.currentSec = Math.round(diff / 1000);
    this.aseconds = (this.currentSec / 60) % 1;
    this.aminutes = (this.currentSec / 3600) % 1;
    this.ahours = (this.currentSec / 43200) % 1;

  }

  //public methode to get clock data
  getData(){
    this.currentDate = new Date();
    this.updateTime();
    this.getSecondsToday();
    return {h:this.hours, m:this.minutes, s:this.seconds, diem:this.diem, ah:this.ahours, am:this.aminutes, as:this.aseconds };
  }

  getDataUpdate(){
    this.currentDate = this.setTime();
    this.updateTime();
    this.getSecondsToday();
    return {h:this.hours, m:this.minutes, s:this.seconds, diem:this.diem, ah:this.ahours, am:this.aminutes, as:this.aseconds };
  }

  setTime() {
    this.updateState = true;
     let dt = new Date();
     dt.setHours(dt.getHours() + 2);
     return dt;
  }


}
