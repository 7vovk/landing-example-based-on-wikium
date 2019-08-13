import {NgModule} from '@angular/core';
import {HeaderComponent} from './components/header/header.component';
import {ArrowDownComponent} from './components/arrow-down/arrow-down.component';
import {FooterComponent} from './components/footer/footer.component';
import {CommonModule} from '@angular/common';
import {UnderlineDirective} from './directives/underline.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    HeaderComponent,
    ArrowDownComponent,
    FooterComponent,
    UnderlineDirective
  ],
  exports: [
    HeaderComponent,
    ArrowDownComponent,
    FooterComponent,
    UnderlineDirective
  ]
})
export class SharedModule {
}
