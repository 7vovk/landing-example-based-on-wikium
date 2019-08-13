import { Component, OnInit } from '@angular/core';
import {LanguageService} from '../../../shared/services/language.service';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss']
})
export class BenefitsComponent {
  constructor(private languageService: LanguageService) { }

  getColor(value) {
    switch (value) {
      case '+17%':
        return '#27a8e0';
      case 'х1,6':
        return '#b47cfc';
      case 'x2,1':
        return '#ec5956';
      case '+19%':
        return '#23b175';
    }
  }

  benefitsItem: any[] = [
    {
      value: "+17%",
      text: 'к скорости реакции за неделю',
      textEng: 'to the reaction rate per week'
    },
    {
      value: "х1,6",
      text: 'к фокусировке на задачах за 1 месяц',
      textEng: 'focus on tasks for 1 month'
    },
    {
      value: "x2,1",
      text: 'к вниманию к мелочам и деталям за 2 месяца',
      textEng: 'attention to detail and details in 2 months'
    },
    {
      value: "+19%",
      text: 'к памяти за 2–3 недели',
      textEng: 'for memory in 2-3 weeks'
    }
  ];

  changeLang() {
    this.languageService.changeLang();
  }
}
