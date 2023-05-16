import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Section2CollectionModule } from "./section2-collection/section2-collection.module";
import { Section3AboutModule } from "./section3-about/section3-about.module";
import { SectionHeaderModule } from "./section-header/section-header.module";
import {Section4IndicatorsModule} from "./section4-indicators/section4-indicators.module";

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    SectionHeaderModule,
    Section2CollectionModule,
    Section3AboutModule,
    Section4IndicatorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
