import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
  api_url: string = 'http://localhost:3000/';

  constructor(public http: HttpClient) { }

  public getCurrentState() {
    var url = this.api_url + 'active_state';
    return this.http.get(url).subscribe(
      response => {
        console.log(response);
        return response;
      },
      error => {
        console.log("Error occured");
      }
    );
  }

  public getSavedConfigurations() {
    var url = this.api_url + 'states';
    return this.http.get(url);
  }

  public patchCurrentState(stateObject) {
    var url = this.api_url + 'states/' + stateObject.id
    console.log(url);
    this.http.patch(url, stateObject).subscribe(
      response => {
        console.log(response);
      },
      err => {
        console.log("Error occured");
      }
    );
  }

}
