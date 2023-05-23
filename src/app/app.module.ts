import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Section2CollectionModule } from "./section2-collection/section2-collection.module";
import { Section3AboutModule } from "./section3-about/section3-about.module";
import { SectionHeaderModule } from "./section-header/section-header.module";
import {Section4IndicatorsModule} from "./section4-indicators/section4-indicators.module";
import {Section5ShopModule} from "./section5-shop/section5-shop.module";
import {Section6SommelierModule} from "./section6-sommelier/section6-sommelier.module";
import {Section7StagesModule} from "./section7-stages/section7-stages.module";
import {Section8AboutWineModule} from "./section8-about-wine/section8-about-wine.module";
import {Section9ShowcaseModule} from "./section9-showcase/section9-showcase.module";
import {Section10BlogModule} from "./section10-blog/section10-blog.module";
import {Section11AboutUsModule} from "./section11-about-us/section11-about-us.module";
import {Section12FooterModule} from "./section12-footer/section12-footer.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SectionHeaderModule,
    Section2CollectionModule,
    Section3AboutModule,
    Section4IndicatorsModule,
    Section5ShopModule,
    Section6SommelierModule,
    Section7StagesModule,
    Section8AboutWineModule,
    Section9ShowcaseModule,
    Section10BlogModule,
    Section11AboutUsModule,
    Section12FooterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
