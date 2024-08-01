import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeatherService } from '../services/weather.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
// import { enviroment } from '../enviroment/enviroment';
import { envoiroment } from '../enviroment/enviroment';
import { RootObject  } from '../models/weather';
import { Root } from '../models/weather';



// const ApI_URL = enviroment.API_URL;
// const API_KEY = enviroment.API_KEY
@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrl: './weather-app.component.css'
})
export class WeatherAppComponent implements OnInit{

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
// constructor(private weatherDervice:WeatherService){
//   this.todayDate = new Date()
// }
// temp:number= 0;

// temp_max:number = 0;
// temp_min:number=0;
// humidity:number = 0;
// grnd_level:number = 0;
// feels_like:number = 0;
// sea_level:number= 0;

// RootObject ? :RootObject;
todayDate ! : Date;
city:any= "";
cityName : string='';
// Current?:Current
// Location?:Location
// RootObject?:RootObject
Root?:Root;
RootObject?:RootObject
constructor(private weatherservice:WeatherService){
  this.todayDate = new Date()
}

ngOnInit(): void {
  this.GetWeatherData (this.cityName);
  this.cityName= '';
}
onSubmit(){
this.GetWeatherData (this.cityName);
this.cityName= '';
}

private GetWeatherData(CityName:string){
 return this.weatherservice.getWeatherData('cityName')
  .subscribe({
    next:(Response)=>{
      this.Root = Response;
      console.log(Response)
      
    }
  })
}










}





  
  



















// getWeather(){
//   this.weatherDervice.getWeather(this.city).subscribe(data=>{
//     console.log(data);
  
//     this.temp_max = data.main.temp_max -273
//     this.temp= data.main.temp -273
//     this.temp_min =data.main.temp_min -273
//     this.humidity = data.main.humidity;
//     this.grnd_level = data.main.grnd_level -273
//     this.feels_like = data.main.feels_like -273
//     this.sea_level = data.main.sea_level;

//   })
// }






























































  

