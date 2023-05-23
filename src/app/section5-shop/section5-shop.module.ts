import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Section5ShopComponent} from "./section5-shop.component";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [Section5ShopComponent],
  exports: [Section5ShopComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ]
})
export class Section5ShopModule { }
