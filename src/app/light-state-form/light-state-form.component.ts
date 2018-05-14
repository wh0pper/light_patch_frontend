import { Component, OnInit } from '@angular/core';

import { LightState } from '../models/light-state.model';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-light-state-form',
  templateUrl: './light-state-form.component.html',
  styleUrls: ['./light-state-form.component.css']
})
export class LightStateFormComponent implements OnInit {
  current_state: LightState;
  modes = ['Color wheel', 'Wake up', 'Music responsive', 'Meditate'];
  // model = new LightState(true, 'Color wheel', 1.0, '#ff0000')
  submitted = false;

  onSubmit() { this.submitted = true; }

  constructor(public apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.get('active_state').subscribe((data) =>
      console.log(data);
    );
  }

}
