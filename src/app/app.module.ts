import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './module/components/header/header.component';
import { ParticlesComponent } from './module/components/particles/particles.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArrowDownComponent } from './module/components/arrow-down/arrow-down.component';
import { BenefitsComponent } from './module/components/benefits/benefits.component';
import { MatGridListModule } from '@angular/material';
import { AudienceComponent } from './module/components/audience/audience.component';
import { ScienceComponent } from './module/components/science/science.component';
import { AboutComponent } from './module/components/about/about.component';
import { ReviewsComponent } from './module/components/reviews/reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ParticlesComponent,
    ArrowDownComponent,
    BenefitsComponent,
    AudienceComponent,
    ScienceComponent,
    AboutComponent,
    ReviewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
