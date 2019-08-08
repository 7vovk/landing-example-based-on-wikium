import {Component, OnInit} from '@angular/core';

import {Reviews} from '../../../shared/models/reviews';
import {REVIEWS_SHOWN} from '../../../mock_shown_reviews';
import {REVIEWS_HIDDEN} from '../../../mock_hidden_reviews';
import {ToggleClassService} from '../../../shared/services/toggleclass.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  public reviewsShown: Reviews[] = REVIEWS_SHOWN;
  public reviewsHidden: Reviews[] = REVIEWS_HIDDEN;
  public myClass = 'invisible';
  private isButtonVisible = true;

  constructor(private myService: ToggleClassService) {
  }

  ngOnInit() {
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
