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
  currentStateObservable: Observable<any>;
  currentStateId: number;
  modes = ['solid', 'blink', 'pulse', 'marquee'];

  constructor(public apiService: ApiService) {
  }

  ngOnInit() {
    this.currentStateObservable = this.apiService.getCurrentState()
    this.currentStateObservable.subscribe(data => {
      this.currentStateId = data.id;
    });
  }

  submitForm(newColor, newMode, newBrightness) {
    let formattedColor = newColor.replace(/#/, '0x')
    this.apiService.patchCurrentState(this.currentStateId, formattedColor, newMode, newBrightness);
  }

  togglePower() {
    // let updates = {'id': this.currentState.id, 'active': this.currentState.active};
    // console.log(this.currentStateObservable);
    this.apiService.turnOff();
  }


}
