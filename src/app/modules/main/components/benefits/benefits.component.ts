import { Component, OnInit } from '@angular/core';
import {LanguageService} from '../../../shared/services/language.service';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss']
})
export class BenefitsComponent {
  constructor(private languageService: LanguageService) { }

  changeLang() {
    this.languageService.changeLang();
  }
}
