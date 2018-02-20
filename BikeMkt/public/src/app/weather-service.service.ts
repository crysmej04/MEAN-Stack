import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class WeatherServiceService {

  constructor(private _http: Http) { }
  weather = "";

  getWeather(city, callback){
    this._http.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&&appid=05f34d80dbffb694370e80b9b3e4a2e2").subscribe(
      (response) => {
        //console.log(response.json());
        this.weather = response.json();
        callback(this.weather);
      },
      (error) => {console.log(error);
      callback("error")}
    )
  }
}