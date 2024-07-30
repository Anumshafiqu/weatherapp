import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeatherService } from '../services/weather.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
// import { enviroment } from '../enviroment/enviroment';

// const ApI_URL = enviroment.API_URL;
// const API_KEY = enviroment.API_KEY
@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrl: './weather-app.component.css'
})
export class WeatherAppComponent {

  // city!:string ;
  // WeatherData:any;
  // constructor(private serviceweather:WeatherService) { }
  
  // ngOnInit(): void {
    
  // }
  // getWeather(){
  //   this.WeatherData.getWeather(this.city).subscribe[data=>{
  //     this.WeatherData = data;
  //     console.log(data)
  //   }
  // ]
  // }
  // constructor(private fb:FormBuilder , private service:WeatherService) { }
  // searchForm ! : FormGroup;
  // ngOnInit(): void {
  //   this.searchForm = this.fb.group({
  //     city : [null, Validators.required]
  //   })
  // }
  // searchweather(){
  //   console.log(this.searchForm.value);
  //   this.service.searchweatherbycity(this.searchForm.get(['city'])!.value).subscribe((res)=>{
  //     console.log(res);
  //     this.weather = this.service;
  //   })
  // }
//   weather:any;
// }




// weatherTemp:any
// constructor (public httpClient:HttpClient) {
//   this.localData();
// }

// localData(){
//   this.httpClient.get(`${ApI_URL}/weather?q=${"okara"}&appid=${API_KEY}`).subscribe(results=>{
//     console.log(results);
//     this.weatherTemp = results;
//     console.log(this.weatherTemp)
//   })
// }
constructor(private weatherDervice:WeatherService){}
temrature:number = 0;
Mintemrature:number = 0;
humidity:number = 0;
weather:string = '';
query:boolean = false;
pressure:number = 0;

city:any= "";

getWeather(){
  // console.log(this.city);
  this.weatherDervice.getWeather(this.city).subscribe(data=>{
    console.log(data);
    this.query = true;
    this.Mintemrature = data.main.temp_min -273
    this.temrature = data.main.temp_max - 273
    this.humidity = data.main.humidity;
    this.weather = data.weather[0].main;
    this.pressure = data.main.pressure
  })
}














































}















  

