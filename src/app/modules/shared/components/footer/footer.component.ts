import {Component, OnInit} from '@angular/core';
import {LanguageService} from '../../services/language.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private languageService: LanguageService) {
  }

  ngOnInit() {
  }

  changeLang() {
    this.languageService.changeLang();
  }
}
