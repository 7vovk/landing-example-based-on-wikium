import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ArrowDownComponent } from './components/arrow-down/arrow-down.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports:      [],
  declarations: [
    HeaderComponent,
    ArrowDownComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    ArrowDownComponent,
    FooterComponent
  ]
})
export class SharedModule { }
