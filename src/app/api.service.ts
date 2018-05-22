import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { LightState } from './models/light-state.model';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
  api_url: string = 'http://localhost:3000/';

  constructor(public http: HttpClient) { }

  public getCurrentState() {
    var url = this.api_url + 'active_state';
    return this.http.get(url)
  }

  public getSavedConfigurations() {
    var url = this.api_url + 'states';
    return this.http.get(url);
  }

  public patchCurrentState(stateId, color) {
    console.log(stateId, color);
    var url = this.api_url + 'states/' + stateId;
    this.http.patch(url, {'color': color}).subscribe(
      response => {
        console.log(response);
      },
      err => {
        console.log("Error occured in patch request");
      }
    )
    // this.http.patch(url, stateObject).subscribe(
    //   response => {
    //     console.log(response);
    //   },
    //   err => {
    //     console.log("Error occured updating state");
    //   }
    // );
  }

  public createNewState(stateObject) {
    console.log(stateObject);
    var url = this.api_url + 'states';
    return this.http.post(url, stateObject).subscribe(
      response => {
        console.log(response);
      },
      err => {
        console.log("Error occurred creating state")
      }
    )
  }

}
