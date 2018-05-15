import { Component, OnInit } from '@angular/core';

import { LightState } from '../models/light-state.model';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-light-state-form',
  templateUrl: './light-state-form.component.html',
  styleUrls: ['./light-state-form.component.css']
})
export class LightStateFormComponent implements OnInit {
  currentState;
  modes = ['Color wheel', 'Wake up', 'Music responsive', 'Meditate'];

  constructor(public apiService: ApiService) {
  }

  ngOnInit() {
    this.currentState = this.apiService.getCurrentState();
    console.log(this.currentState);
    // this.currentStateObservable.subscribe((data) => {
    //   var body = data.json();
    //   this.currentState = new LightState(body.active, body.mode, body.brightness, body.color, body.id);
    // });
  }

  onSubmit() {
    this.apiService.patchCurrentState(this.currentState);
  }

}