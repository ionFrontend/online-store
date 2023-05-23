import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Section6SommelierComponent} from "./section6-sommelier.component";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [Section6SommelierComponent],
  exports: [Section6SommelierComponent],
  imports: [
    CommonModule,
    MatButtonModule,

  ]
})
export class Section6SommelierModule { }
