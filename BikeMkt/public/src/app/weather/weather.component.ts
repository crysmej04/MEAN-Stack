import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherServiceService } from '../weather-service.service';
import { PictureService } from '../picture.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  city_data;
  temps;

  constructor(private _route: ActivatedRoute, private weatherservice: WeatherServiceService) {
    //feed param from route into weather service api handler...
    this._route.paramMap.subscribe( params => {
      weatherservice.getWeather(params.get('city'), (data) => {this.city_data = data;
        //space for extra stuff as needed...
        console.log(this.city_data);
        this.temps = this.convertMany([this.city_data.main.temp, this.city_data.main.temp_max, this.city_data.main.temp_min])
        
      });
    })  
  }

  convertMany(Ks){
    for(let i=0; i<Ks.length; i++){
      Ks[i] = Math.round((1.8 * (Ks[i] - 273) + 32)*100)/100;
    }
    return Ks;
  }

  ngOnInit() {
  }

}