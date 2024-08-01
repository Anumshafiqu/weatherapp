import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { envoiroment } from '../enviroment/enviroment';
import { __param } from 'tslib';
import {  Root, RootObject } from '../models/weather';








@Injectable({
  providedIn: 'root'
})
export class WeatherService {
// Api:string = 'https://api.openweathermap.org/data/2.5/weather?q=okara&appid=';
// apiKey= 'cde833215bd6b8777b9ac22dbf64b6e7';
// constructor(private http:HttpClient){}


// getWeather(city:string):Observable<any>{
// const URL:string = this.Api + this.apiKey;
//  return this.http.get<any>(URL)
// }

// https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=
// 8545b49cf80e2e0e194a0e90dba5d237

constructor(private http:HttpClient){


}
// getWeatherData(cityName:string):Observable<RootObject> {
//  return this.http.get<RootObject>(envoiroment.getWeather,{
//     headers:new HttpHeaders()
//     .set(envoiroment.XrapidAPIhostHeaderName,envoiroment.XrapidAPIhostHeaderValue)
//     .set(envoiroment.XrapidAPIKeyHeaderName,envoiroment.XrapidAPIKeyHeaderValue),
//     params:new HttpParams()
//     .set('q',cityName )
//     .set('units' , 'standard')
//     .set('mode'  , 'fetch')
    
//   })
  
//   }

getWeatherData(cityName:string):Observable<Root> {
  return this.http.get<Root>(envoiroment.baseurl,{
     headers:new HttpHeaders()
     .set(envoiroment.XrapidAPIhostHeaderName,envoiroment.XrapidAPIhostHeaderValue)
     .set(envoiroment.XrapidAPIKeyHeaderName,envoiroment.XrapidAPIKeyHeaderValue),
    //  params:new HttpParams()
    //  .set('q',cityName )
    //  .set('units' , 'standard')
    //  .set('mode'  , 'fetch')
     
   })
   
   }
  
// getWeatherLogo(CityName:string):{
//   this.http.get()(envoiroment.baseurl,{
//     headers:new HttpHeaders()
//     .set(envoiroment.XrapidAPIhostHeaderName,envoiroment.XrapidAPIhostHeaderValue)
//     .set(envoiroment.XrapidAPIKeyHeaderName,envoiroment.XrapidAPIKeyHeaderValue),
//     params:new HttpParams()
//     .set('q',CityName)
//     .set('units','standard')
//     .set('mode','fetch')
//   })
// }
  }






















 
  // private apiKey = '05114c293amsh127f01a65041292p1e1ff2jsnf9aa3166e46b';
  // private apiUrl = 'https://the-weather-api.p.rapidapi.com/api/weather';
  // constructor(private http: HttpClient) { }

  // searchweatherbycity(city:string) : Observable<any> {
  //   const headers = new HttpHeaders()
  //   .set("x-rapidapi-key", this.apiKey )
  //   .set("x-rapidapi-host" ,"the-weather-api.p.rapidapi.com");
  //   const options = {headers};
  //   return this.http.get(`$(this.apiUrl)/$ {city}`, options)
  // }
// ngOnInit(): void {
  
// }
  


