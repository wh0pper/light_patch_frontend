import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './custom-material.module';

import { AppComponent } from './app.component';
import { LightStateFormComponent } from './light-state-form/light-state-form.component';
import { ApiService } from './api.service';
import { PowerToggleComponent } from './power-toggle/power-toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    LightStateFormComponent,
    PowerToggleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CustomMaterialModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
