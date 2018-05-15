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
  currentStateSubscription: Observable<LightState>;
  currentState: LightState;
  modes = ['Color wheel', 'Wake up', 'Music responsive', 'Meditate'];

  constructor(public apiService: ApiService) {
  }

  ngOnInit() {
    this.currentStateSubscription = this.apiService.getCurrentState()
    this.currentStateSubscription.subscribe(data => this.currentState = data)
  }

  onSubmit() {
    console.log(this.currentState);
    this.apiService.patchCurrentState(this.currentState);
  }

  togglePower() {
    let updates = {id: this.currentState.id, active: this.currentState.active}
    console.log(updates.active);
    this.apiService.patchCurrentState(updates);
  }

}
