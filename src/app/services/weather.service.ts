import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Weather } from '../enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
Api:string = 'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid='
apiKey= '8545b49cf80e2e0e194a0e90dba5d237';
constructor(private http:HttpClient){}


getWeather(city:string):Observable<Weather>{
const URL:string = this.Api + this.apiKey;
 return this.http.get<Weather>(URL)
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
  }


