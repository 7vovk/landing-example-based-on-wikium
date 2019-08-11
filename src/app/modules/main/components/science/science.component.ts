import { Component, OnInit } from '@angular/core';
import {LanguageService} from '../../../shared/services/language.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.scss']
})
export class ScienceComponent implements OnInit {

  constructor(private languageService: LanguageService) { }

  ngOnInit() {
  }
  changeLang() {
    this.languageService.changeLang();
  }

}
