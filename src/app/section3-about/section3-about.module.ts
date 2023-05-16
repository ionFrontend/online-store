import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Section3AboutComponent} from "./section3-about.component";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [Section3AboutComponent],
  exports: [
    Section3AboutComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ]
})
export class Section3AboutModule { }
