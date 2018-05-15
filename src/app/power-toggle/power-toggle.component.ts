import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power-toggle',
  templateUrl: './power-toggle.component.html',
  styleUrls: ['./power-toggle.component.css']
})
export class PowerToggleComponent implements OnInit {
state: boolean;

  constructor() { }

  ngOnInit() {
  }

}
