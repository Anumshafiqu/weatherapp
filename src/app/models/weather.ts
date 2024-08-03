// export interface Weather {
//     coord:      Coord;
//     weather:    WeatherElement[];
//     base:       string;
//     main:       Main;
//     visibility: number;
//     clouds:     Clouds;
//     Wind: Wind;
//     dt:         number;
//     sys:        Sys;
//     timezone:   number;
//     id:         number;
//     name:       string;
//     cod:        number;
// }

// export interface Clouds {
//     all: number;
// }

// export interface Coord {
//     lon: number;
//     lat: number;
// }
//  export interface Main {
//     temp:       number;
//     feels_like: number;
//     temp_min:   number;
//     temp_max:   number;
//     pressure:   number;
//     humidity:   number;
//     sea_level:  number;
//     grnd_level: number;
//  }

// export interface Sys {
//     type:    number;
//     id:      number;
//     country: string;
//     sunrise: number;
//     sunset:  number;
// }

// export interface WeatherElement {
//     id:          number;
//     main:        string;
//     description: string;
//     icon:        string;
// }

// export interface Wind {
//     speed: number;
//     deg:   number;
//     gust:  number;
// }




//  export interface RootObject {
//     location: string;
//     region: string;
//     country: string;
//     lat: number;
//     lon: number;
//     tz_id: string;
//     localtime_epoch: number;
//     localtime: string;
//     current: string;
//     last_updated: string;
//     temp_c: number;
//     temp_f: number;
//     is_day: number;
//     condition: string;
//     wind_kph: number;
//     wind_degree: number;
//     wind_dir: string;
//     pressure_mb: number;
//     pressure_in: number;
//     precip_mm: number;
//     precip_in: number;
//     humidity: number;
//     cloud: number;
//     feelslike_c: number;
//     feelslike_f: number;
//     windchill_c: number;
//     windchill_f: number;
//     heatindex_c: number;
//     heatindex_f: number;
//     dewpoint_c: number;
//     dewpoint_f: number;
//     vis_km: number;
//     vis_miles: number;
//     uv: number;
//     gust_mph: number;
//     gust_kph: number;
//   }




//  export interface Location {
//     name: string;
//     region: string;
//     country: string;
//     lat: number;
//     lon: number;
//     tz_id: string;
//     localtime_epoch: number;
//     localtime: string;
//   }
  
//  export interface Condition {
//     text: string;
//     icon: string;
//     code: number;
//   }
  
//  export interface Current {
//     last_updated_epoch: number;
//     last_updated: string;
//     temp_c: number;
//     temp_f: number;
//     is_day: number;
//     condition: Condition;
//     wind_mph: number;
//     wind_kph: number;
//     wind_degree: number;
//     wind_dir: string;
//     pressure_mb: number;
//     pressure_in: number;
//     precip_mm: number;
//     precip_in: number;
//     humidity: number;
//     cloud: number;
//     feelslike_c: number;
//     feelslike_f: number;
//     windchill_c: number;
//     windchill_f: number;
//     heatindex_c: number;
//     heatindex_f: number;
//     dewpoint_c: number;
//     dewpoint_f: number;
//     vis_km: number;
//     vis_miles: number;
//     uv: number;
//     gust_mph: number;
//     gust_kph: number;
//   }
  
//  export interface WeatherData {
//     location: Location;
//     current: Current;
//   }




// export interface Condition {
//     text: string;
//     icon: string;
//     code: number;
//   }
  
  
//   export interface CurrentWeather {
//     last_updated_epoch: number;
//     last_updated: string;
//     temp_c: number;
//     temp_f: number;
//     is_day: number;
//     condition: Condition;
//     wind_mph: number;
//     wind_kph: number;
//     wind_degree: number;
//     wind_dir: string;
//     pressure_mb: number;
//     pressure_in: number;
//     precip_mm: number;
//     precip_in: number;
//     humidity: number;
//     cloud: number;
//     feelslike_c: number;
//     feelslike_f: number;
//     windchill_c: number;
//     windchill_f: number;
//     heatindex_c: number;
//     heatindex_f: number;
//     dewpoint_c: number;
//     dewpoint_f: number;
//     vis_km: number;
//     vis_miles: number;
//     uv: number;
//     gust_mph: number;
//     gust_kph: number;
//   }  
  
  
//   export interface Location {
//     name: string;
//     region: string;
//     country: string;
//     lat: number;
//     lon: number;
//     tz_id: string;
//     localtime_epoch: number;
//     localtime: string;
//   }
  
  
//   export interface WeatherData {
//     location: Location;
//     current: CurrentWeather;
//   }


// export interface Root {
//     location: {
//       name: string
//       region: string
//       country: string
//       lat: number
//       lon: number
//       tz_id: string
//       localtime_epoch: number
//       localtime: string
//     }
//  current: {
//       last_updated_epoch: number
//       last_updated: string
//       temp_c: number
//       temp_f: number
//       is_day: number
//       condition: {
//         text: string
//         icon: string
//         code: number
//       }
//       wind_mph: number
//       wind_kph: number
//       wind_degree: number
//       wind_dir: string
//       pressure_mb: number
//       pressure_in: number
//       precip_mm: number
//       precip_in: number
//       humidity: number
//       cloud: number
//       feelslike_c: number
//       feelslike_f: number
//       windchill_c: number
//       windchill_f: number
//       heatindex_c: number
//       heatindex_f: number
//       dewpoint_c: number
//       dewpoint_f: number
//       vis_km: number
//       vis_miles: number
//       uv: number
//       gust_mph: number
//       gust_kph: number
//     }
// }

  
 


export interface Weather {
  location: Location;
  current:  Current;
}

export interface Current {
  last_updated_epoch: number;
  last_updated:       string;
  temp_c:             number;
  temp_f:             number;
  is_day:             number;
  condition:          Condition;
  wind_mph:           number;
  wind_kph:           number;
  wind_degree:        number;
  wind_dir:           string;
  pressure_mb:        number;
  pressure_in:        number;
  precip_mm:          number;
  precip_in:          number;
  humidity:           number;
  cloud:              number;
  feelslike_c:        number;
  feelslike_f:        number;
  windchill_c:        number;
  windchill_f:        number;
  heatindex_c:        number;
  heatindex_f:        number;
  dewpoint_c:         number;
  dewpoint_f:         number;
  vis_km:             number;
  vis_miles:          number;
  uv:                 number;
  gust_mph:           number;
  gust_kph:           number;
}

export interface Condition {
  text: string;
  icon: string;
  code: number;
}

export interface Location {
  name:            string;
  region:          string;
  country:         string;
  lat:             number;
  lon:             number;
  tz_id:           string;
  localtime_epoch: number;
  localtime:       string;
}