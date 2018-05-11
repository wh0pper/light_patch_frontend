import { Component, OnInit } from '@angular/core';
import { LightState } from '../models/light-state.model'
@Component({
  selector: 'app-light-state-form',
  templateUrl: './light-state-form.component.html',
  styleUrls: ['./light-state-form.component.css']
})
export class LightStateFormComponent implements OnInit {

  modes = ['Color wheel', 'Wake up', 'Music responsive', 'Meditate']

  model = new LightState(true, 'Color wheel', 1.0, '#ff0000')

  submitted = false;

  onSubmit() { this.submitted = true; }

  constructor() { }

  ngOnInit() {
  }

}
