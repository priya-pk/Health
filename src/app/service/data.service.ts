import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient , HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url: string = `http://143.110.240.107:8000`; 
  
  headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');

  constructor(private http: HttpClient) { }

  login(data: any): Observable<any> {
    return this.http.post(`${this.url}/admin/login`, data).pipe(
      map(
        (response: any) => {
          return response;
        },
        (error: any) => {
          return error;
        }
      )
    );
  }

  getCategory(): Observable<any> {
    return this.http.get(`${this.url}/admin/get_healthTip_categories`, { 'headers': this.headers }).pipe(
      map(
        (response: any) => {
          return response.data;
        },
        (error: any) => {
          return error;
        }
      )
    );
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
