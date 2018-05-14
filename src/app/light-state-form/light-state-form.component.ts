import { Component, OnInit } from '@angular/core';

import { LightState } from '../models/light-state.model';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-light-state-form',
  templateUrl: './light-state-form.component.html',
  styleUrls: ['./light-state-form.component.css']
})
export class LightStateFormComponent implements OnInit {
  currentStateObservable;
  modes = ['Color wheel', 'Wake up', 'Music responsive', 'Meditate'];
  // submitted = false;
  //
  // onSubmit() { this.submitted = true; }

  constructor(public apiService: ApiService) {
  }

  ngOnInit() {
    this.currentStateObservable = this.apiService.getCurrentState();
    this.currentStateObservable.subscribe((data) =>
      var body = data.json();
      this.currentState = new LightState(body.active, body.mode, body.brightness, body.color);
    );
  }

  onSubmit() {
    this.apiService.postNewState(this.currentState);
  }

}
