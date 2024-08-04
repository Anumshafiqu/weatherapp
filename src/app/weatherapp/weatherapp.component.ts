import { Component } from '@angular/core';
import { envoiroment } from '../enviroment/enviroment';
// import { Weather } from '../models/weather';
import { EnviromentService } from '../services/enviroment.service';

@Component({
  selector: 'app-weatherapp',
  templateUrl: './weatherapp.component.html',
  styleUrl: './weatherapp.component.css'
})
export class WeatherappComponent {
  weatherData: any;
  city: string = '';

   constructor(private enviroment:EnviromentService) { }

  ngOnInit(): void {
    // Initialize with a default city if needed
    this.getWeather('London');
  }

  // getWeather(city: string): void {
  //   this.enviroment.getWeather(city).subscribe(data => {
  //     this.weatherData = data;
  //   }, error => {
  //     console.error('Error fetching weather data:', error);
  //   });
  // }

  onSearch(): void {
    if (this.city) {
      this.getWeather(this.city);
    }
  }
  getWeather(city: string): void {
    this.enviroment.getWeather(city).subscribe(data => {
      console.log(data); // Log the data to check the response
      this.weatherData = data;
    }, error => {
      console.error('Error fetching weather data:', error);
    });
  }





}
