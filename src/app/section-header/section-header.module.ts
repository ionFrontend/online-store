import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SectionHeaderComponent} from "./section-header.component";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [SectionHeaderComponent],
  exports: [
    SectionHeaderComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
  ]
})
export class SectionHeaderModule { }
