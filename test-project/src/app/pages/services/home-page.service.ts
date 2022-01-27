import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HomePageService {
  lat: number = 0;
  lon: number = 0;

  constructor(private http: HttpClient) {
  }

// ToDo get current user position

  public getCurrentPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        if(position.coords)
        this.lat = position.coords.latitude;
        this.lon = position.coords.longitude;
      });
    }
  }

// We can't get yesterday's forecast because we can't use OpenWeatherMap History API due to lack of access
  public getWeather(lat: number , lon: number ) {
    return this.http.get<any>(` https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=metric&cnt=2&appid=${environment.openWeatherKey.key}`)
  }

}
