import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Section2CollectionComponent} from "./section2-collection.component";



@NgModule({
  declarations: [Section2CollectionComponent],
  exports: [
    Section2CollectionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class Section2CollectionModule { }
