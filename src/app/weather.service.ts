import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Forecast } from './Forecast';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey = "1434dca849cf40eaae0114408191804";
  constructor(private http:HttpClient) { }
  getTemperature(city_name) {
    return this.http.get(`http://api.apixu.com/v1/forecast.json?key=${this.apiKey}&q=${city_name}&days=7`);
  }
}
