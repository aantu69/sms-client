import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IEmployee } from '../employee';
import 'rxjs/add/operator/map';

@Injectable()
export class CommonService {
  constructor(private http: HttpClient) { }


  getEmployees(url) {
    return this.http.get(url)
      .map(result => result);
  }

  login(url, data) {
    const reqHeaders = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.post(url, data, {headers: reqHeaders})
      .map(result => result);
  }
}
