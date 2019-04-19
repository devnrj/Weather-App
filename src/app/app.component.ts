import { Component, Input, OnInit, } from '@angular/core';
import {WeatherService} from './weather.service';
import { Forecast } from './Forecast';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'My Weather App';
  currentForecast: Forecast;
  forecasts : Forecast[]=[];
  location :string;
  data : any;
  srcUrl : string;
  days : string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  constructor(private weatherService:WeatherService){
   
  }
  getCurrentDate() : string{
    let months = ['January','February','March','April','May','June','July','August','September','October',
                  'November','December'];
    let d = new Date();
    return this.days[d.getDay()] +", "+months[d.getMonth()]+" "+ d.getDate()+"th";
  }
  showTemperature(){
    
    this.weatherService.getTemperature(this.location).subscribe((d) => {
      this.data=d;
      let loc = this.data.location.name + ", "+this.data.location.country;
      let cond = this.data.current.condition.text;
      let humid = this.data.current.humidity;
      let percp = this.data.current.precip_mm;
      let wind = this.data.current.wind_mph+" mph "+this.data.current.wind_dir;
      let icon = this.data.current.condition.icon;
      let date = this.getCurrentDate();
      let maxTemp = this.data.current.temp_c;
      this.currentForecast= new Forecast(loc,cond,humid,percp,wind,icon,date,maxTemp,null);
      let i=0;
      this.forecasts=[];
      this.data.forecast.forecastday.forEach(element => {
        let icon = element.day.condition.icon;
        let cond = element.day.condition.text;
        let humid = element.day.avghumidity;
        let maxTemp = element.day.maxtemp_c;
        let minTemp = element.day.mintemp_c;
        let date = i==0?"Today":this.days[(new Date().getDay()+i)%7];
        this.forecasts.push(new Forecast(null,cond,humid,null,null,icon,date,maxTemp,minTemp));
        i++;
      });
    });
    
  }
  ngOnInit(){
    
  }
}
