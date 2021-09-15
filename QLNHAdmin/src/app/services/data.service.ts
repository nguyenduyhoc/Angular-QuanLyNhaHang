import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Restaurant } from 'src/models/Restaurant';
import { Role } from 'src/models/Role';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private REST_API_SERVER = environment.api;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  public getAllRoles(): Observable<Role[]> {
    const url = `${this.REST_API_SERVER}/Role`;
    return this.httpClient.get<Role[]>(url, this.httpOptions);
  }

  public getAllRestaurants(): Observable<Restaurant[]> {
    const url = `${this.REST_API_SERVER}/Restaurant`;
    return this.httpClient.get<Restaurant[]>(url, this.httpOptions);
  }

  public postRestaurant(payload: Restaurant): Observable<Restaurant> {
    const url = `${this.REST_API_SERVER}/Restaurant`;
    return this.httpClient.post<Restaurant>(url, payload, this.httpOptions);
  }

  public putRestaurant(payload: Restaurant): Observable<Restaurant> {
    const url = `${this.REST_API_SERVER}/Restaurant`;
    return this.httpClient.put<Restaurant>(url, payload, this.httpOptions);
  }
}
