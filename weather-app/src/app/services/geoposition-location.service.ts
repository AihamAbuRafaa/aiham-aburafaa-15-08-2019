import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class GeopositionLocationService {

  BASE_URL = environment.baseUrl;
  API_KEY = environment.apiKey;

  city: any;
  constructor(private http: HttpClient) { }
  getLocationByCoord(lat: number, lng: number): Observable<any> {
    return this.http.get(`${this.BASE_URL}locations/v1/cities/geoposition/search?apikey=${this.API_KEY}&q=${lat},${lng}`)
      .pipe(map(item => {
        this.city =
          {
            Key: item['Key'],
            cityName: item['LocalizedName']
          }
        return this.city
      }));
  }
}
