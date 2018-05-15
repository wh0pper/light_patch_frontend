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
  currentState: Observable<LightState>;
  modes = ['Color wheel', 'Wake up', 'Music responsive', 'Meditate'];

  constructor(public apiService: ApiService) {
  }

  ngOnInit() {
    this.currentState = this.apiService.getCurrentState();
  }
  //
  // onSubmit() {
  //   this.apiService.patchCurrentState(this.currentState);
  // }
  //
  // togglePower() {
  //   this.apiService.patchCurrentState(this.currentState);
  // }

}
