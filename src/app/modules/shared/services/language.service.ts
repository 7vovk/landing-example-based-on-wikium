import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  isLangRus: boolean;

  constructor() { }

  changeLang() {
    this.isLangRus ? this.isLangRus = false : this.isLangRus = true;
  }

}
