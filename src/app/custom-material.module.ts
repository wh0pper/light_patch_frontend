import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatOptionModule,
  MatRadioModule,
  MatSliderModule,
  MatTabsModule,
  MatSlideToggleModule,
  MatGridListModule,
  MatDividerModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatRadioModule,
    MatSliderModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatDividerModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatRadioModule,
    MatSliderModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatDividerModule
  ]
})

export class CustomMaterialModule {

}
