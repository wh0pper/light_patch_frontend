import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LightState } from '../models/light-state.model';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-light-state-form',
  templateUrl: './light-state-form.component.html',
  styleUrls: ['./light-state-form.component.css']
})
export class LightStateFormComponent implements OnInit {
  currentStateObservable: Observable<LightState>;

  constructor(public apiService: ApiService) {
  }

  ngOnInit() {
    this.currentStateObservable = this.apiService.getCurrentState()
    // this.currentStateSubscription.subscribe(data => this.currentState = data)
  }

  onSubmit() {
    console.log(this.currentStateObservable);
    this.currentStateObservable.subscribe(data => {
      console.log(data);
      this.apiService.patchCurrentState(data);
    )};
  }

  let togglePower() {
    let updates = {'id': this.currentState.id, 'active': this.currentState.active};
    console.log(this.currentStateObservable);
    this.apiService.patchCurrentState(updates);
  }


}
