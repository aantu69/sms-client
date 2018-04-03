import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IEmployee } from '../employee';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { environment } from '../../environments/environment';

@Injectable()
export class CommonService {

  
  //private  reqHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  private baseUrl = environment.base_url;

  constructor(private http: HttpClient) { }

  login(url, dataObject) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');

    return this.http.post<any>(this.baseUrl + url, dataObject, {headers})
                    .catch(this.errorHandler);

  }

  getDatas(url) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json').set('Authorization','Bearer ' + localStorage.getItem('access_token'));
    return this.http.get<any>(this.baseUrl + url, {headers})
                    .catch(this.errorHandler);
  }

  getData(url, id) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json').set('Authorization','Bearer ' + localStorage.getItem('access_token'));
    let params =new HttpParams().set('id', id);
    return this.http.get<any>(this.baseUrl + url, {params, headers})
                    .catch(this.errorHandler);
  }

  saveData(url, dataObject) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json').set('Authorization','Bearer ' + localStorage.getItem('access_token'));
    return this.http.post<any>(this.baseUrl + url, dataObject, {headers})
                    .catch(this.errorHandler);
  }

  updateData(url, id, dataObject) {
    let params =new HttpParams().set('id', id);
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json').set('Authorization','Bearer ' + localStorage.getItem('access_token'));
    return this.http.put<any>(this.baseUrl + url, dataObject, {params, headers})
                    .catch(this.errorHandler);
  }

  deleteData(url, id) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json').set('Authorization','Bearer ' + localStorage.getItem('access_token'));
    let params =new HttpParams().set('id', id);
    return this.http.get<any>(this.baseUrl + url, {params, headers})
                    .catch(this.errorHandler);
  }



  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "Server Error");
  }
}
