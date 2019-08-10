import {NgModule} from '@angular/core';
import {ParticlesComponent} from './components/particles/particles.component';
import {BenefitsComponent} from './components/benefits/benefits.component';
import {AudienceComponent} from './components/audience/audience.component';
import {ScienceComponent} from './components/science/science.component';
import {AboutComponent} from './components/about/about.component';
import {ReviewsComponent} from './components/reviews/reviews.component';
import {BrowserModule} from '@angular/platform-browser';
import {MatGridListModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from '../../app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {AdminComponent} from '../auth/admin';
import {LoginComponent} from '../auth/login';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatGridListModule,
  ],
  declarations: [
    ParticlesComponent,
    BenefitsComponent,
    AudienceComponent,
    ScienceComponent,
    AboutComponent,
    ReviewsComponent,
    AdminComponent,
    LoginComponent,
  ],
  exports: [
    ParticlesComponent,
    BenefitsComponent,
    AudienceComponent,
    ScienceComponent,
    AboutComponent,
    ReviewsComponent,
  ]
})
export class MainModule {
}
