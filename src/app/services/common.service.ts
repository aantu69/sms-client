import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CommonService {
  readonly rootUrl = '';
  constructor(private http: Http) { }

  login(url, data) {
    const reqHeaders = new HttpHeaders({'Content-Type' : 'application/json'});
    url = this.rootUrl + url;
    return this.http.post(url, data);
  }

  postData(url, data, headers) {
    return this.http.post(url, data, headers).map(x => x.json());
  }

  saveData(url, data, headers) {
    return this.http.post(url, data, headers).map((response: Response) => response.json());
  }

  updateData(url, data, headers) {
    return this.http.post(url, data, headers).map((response: Response) => response.json());
  }

  getDatas(url, headers) {
    return this.http.get(url, headers).map((response: Response) => response.json());
  }

  getData(url, id, headers) {
    return this.http.get(url, headers).map((response: Response) => response.json());
  }

  deleteData(url, id, headers) {
    return this.http.post(url, headers).map((response: Response) => response.json());
  }

}

