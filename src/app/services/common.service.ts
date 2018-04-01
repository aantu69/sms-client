import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IEmployee } from '../employee';
import 'rxjs/add/operator/map';

@Injectable()
export class CommonService {
  //private _url: string = "../../assets/data/employee.json";
  constructor(private http: HttpClient) { }
  //constructor() { }

  getEmployees(url) {
    return this.http.get(url)
      .map(result => result);
  }

  login(url, data) {
    var reqHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(url, data, {headers: reqHeaders})
      .map(result => result);
  }
}

 