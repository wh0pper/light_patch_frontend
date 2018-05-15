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
  serverStateId: number = null;
  currentState: Observable<LightState>;
  modes = ['Color wheel', 'Wake up', 'Music responsive', 'Meditate'];

  constructor(public apiService: ApiService) {
  }

  ngOnInit() {
    this.currentState = this.apiService.getCurrentState()
    this.currentState.subscribe(data => this.serverStateId = data.id)
  }

  onSubmit() {
    this.apiService.patchCurrentState(serverStateId, this.currentState);
    console.log(this.currentState);
  }
  //
  // togglePower() {
  //   this.apiService.patchCurrentState(this.currentState);
  // }

}
