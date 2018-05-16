import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-config-menu',
  templateUrl: './config-menu.component.html',
  styleUrls: ['./config-menu.component.css']
})
export class ConfigMenuComponent implements OnInit {


  constructor(public api: ApiService) { }

  ngOnInit() {
    this.configs = this.api.getSavedConfigurations();
    console.log(this.configs);
  }

}
