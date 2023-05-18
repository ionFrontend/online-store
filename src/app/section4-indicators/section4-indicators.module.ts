import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Section4IndicatorsComponent} from "./section4-indicators.component";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [Section4IndicatorsComponent],
  exports: [
    Section4IndicatorsComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ]
})
export class Section4IndicatorsModule { }
