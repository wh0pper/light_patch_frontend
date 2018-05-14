import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ApiService {
  api_url: string = 'http://localhost:3000/';

  constructor(public http: Http) { }

  public getCurrentState() {
    var url = this.api_url + 'active_state';
    return this.http.get(url);
  }

  public postNewState(stateObject) {
    var url = this.api_url + ''
  }

}
