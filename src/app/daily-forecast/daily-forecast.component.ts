import { Component, OnInit, Input } from '@angular/core';
import { Forecast } from '../Forecast';

@Component({
  selector: 'app-daily-forecast',
  templateUrl: './daily-forecast.component.html',
  styleUrls: ['./daily-forecast.component.css']
})
export class DailyForecastComponent implements OnInit {

  @Input() forecast
  
  constructor() { }

  ngOnInit() {
   
  }

}
