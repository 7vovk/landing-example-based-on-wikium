import {Component, OnInit} from '@angular/core';

import {Reviews} from '../../../shared/models/reviews';
import {REVIEWS_SHOWN} from '../../../mock_shown_reviews';
import {REVIEWS_HIDDEN} from '../../../mock_hidden_reviews';
import {REVIEWS_SHOWN_ENG} from '../../../mock_shown_reviewsEng';
import {REVIEWS_HIDDEN_ENG} from '../../../mock_hidden_reviewsEng';
import {ToggleClassService} from '../../../shared/services/toggleclass.service';
import {LanguageService} from '../../../shared/services/language.service';


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  public reviewsShown: Reviews[] = REVIEWS_SHOWN;
  public reviewsHidden: Reviews[] = REVIEWS_HIDDEN;
  public reviewsShownEng: Reviews[] = REVIEWS_SHOWN_ENG;
  public reviewsHiddenEng: Reviews[] = REVIEWS_HIDDEN_ENG;
  public myClass = 'invisible';
  private isButtonVisible = true;

  constructor(private myService: ToggleClassService, private languageService: LanguageService) {
  }

  ngOnInit() {
  }
  changeLang() {
    this.languageService.changeLang();
  }


  toggle_class() {
    if (this.myClass === 'invisible') {
      this.myClass = 'visible';
      this.isButtonVisible = false;
    } else {
      this.myClass = 'invisible';
    }
  }

}
