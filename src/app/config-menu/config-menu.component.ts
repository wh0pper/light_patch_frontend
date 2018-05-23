import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

import { LightState } from '../models/light-state.model';

@Component({
  selector: 'app-config-menu',
  templateUrl: './config-menu.component.html',
  styleUrls: ['./config-menu.component.css']
})
export class ConfigMenuComponent implements OnInit {
  configs;

  constructor(public api: ApiService) { }

  ngOnInit() {
    this.api.getSavedConfigurations().subscribe(data => {
      this.configs = data
      console.log(this.configs);
    });
  }

  formatColor(config) {
    return config.color.replace(/0x/, '#')
  }

}
