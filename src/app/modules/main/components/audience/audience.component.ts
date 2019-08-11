import { Component, OnInit } from '@angular/core';
import {LanguageService} from '../../../shared/services/language.service';

@Component({
  selector: 'app-audience',
  templateUrl: './audience.component.html',
  styleUrls: ['./audience.component.scss']
})
export class AudienceComponent implements OnInit {

  constructor(private languageService: LanguageService) { }

  ngOnInit() {
  }
  changeLang() {
    this.languageService.changeLang();
  }
}
