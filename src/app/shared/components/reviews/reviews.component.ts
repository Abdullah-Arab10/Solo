import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent {
  activeReview = 0;
  reviews: review[] = [
    {
      id: 0,
      review:
        '“ Solo makes life easier to me. With Solo you can organize your work and life in seconds. 5 stars!!! ”',
      rating: 0,
      name: 'Jaida Barton',
      via: 'Visual Designer at UI8',
    },
    {
      id: 1,

      review:
        '“ Solo keeps things simple, the best apps of the year I’ve ever used. I’ sure that the upcoming updates will be more complete..”',
      rating: 0,
      name: 'Jedidiah Cassin',
      via: 'via. Google Play',
    },
    {
      id: 2,

      review:
        '“ I used to have a hard time figuring out how to organize online meetings, Solo helped me to find a great solution!',
      rating: 0,
      name: 'Fae Schumm',
      via: 'via. Apple Store',
    },
  ];
  moveReview(step: number) {
    if (step == 1) {
      if (this.activeReview == this.reviews.length - 1) this.activeReview = 0;
      else this.activeReview += step;
    }
    if (step == -1) {
      if (this.activeReview == 0) this.activeReview = this.reviews.length - 1;
      else this.activeReview -= step;
    }
  }
}
interface review {
  id: number;
  review: string;
  rating?: number;
  name: string;
  via: string;
}
