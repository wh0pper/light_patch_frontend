import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ApiService {
  api_url: string = "http://localhost:3000/"

  constructor(public http: Http) { }

  public get(path: string) {
    var url = this.api_url + path;
    return this.http.get(url);
  }

}
