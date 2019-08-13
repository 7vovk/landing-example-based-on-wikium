import { Component, OnInit } from '@angular/core';
import {LanguageService} from '../../../shared/services/language.service';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {

  constructor(private languageService: LanguageService) { }

  ngOnInit() {
  }
  changeLang() {
    this.languageService.changeLang();
  }

}
