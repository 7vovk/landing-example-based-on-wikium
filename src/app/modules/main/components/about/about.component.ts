import { Component, OnInit } from '@angular/core';
import {LanguageService} from '../../../shared/services/language.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private languageService: LanguageService) { }

  ngOnInit() {
  }
  changeLang() {
    this.languageService.changeLang();
  }
}
