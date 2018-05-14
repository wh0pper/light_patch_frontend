import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { LightState } from '../models/light-state.model';

@Component({
  selector: 'app-light-state-form',
  templateUrl: './light-state-form.component.html',
  styleUrls: ['./light-state-form.component.css']
})
export class LightStateFormComponent implements OnInit {
  // current_state: LightState;
  modes = ['Color wheel', 'Wake up', 'Music responsive', 'Meditate'];
  // model = new LightState(true, 'Color wheel', 1.0, '#ff0000')
  submitted = false;

  onSubmit() { this.submitted = true; }

  constructor(private http: Http, public current_state: LightState) {
    console.log(current_state);
    http.get('http://localhost:3000/active_state')
      .subscribe(
        res => var body = res.json());
                this.current_state.active = true,
                this.current_state.mode = body.mode
                // this.current_state.brightness = body[:brightness],
                // this.current_state.color = body[:color]
      )
  }

  ngOnInit() {
  }

}
