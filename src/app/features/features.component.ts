import { Component } from '@angular/core';
import { Comments, Faqs, Features } from './features.data';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent {
  activeComment = 0;
  comments = Comments;
  faqs = Faqs;
  features = Features;
  moveComment(step: number) {
    if (step == 1) {
      if (this.activeComment == this.comments.length - 1)
        this.activeComment = 0;
      else this.activeComment += step;
    }
    if (step == -1) {
      if (this.activeComment == 0)
        this.activeComment = this.comments.length - 1;
      else this.activeComment += step;
    }
    console.log(this.activeComment);
  }
  toggleFAQ(id: string) {
    const element = document?.getElementById(id)?.classList;
    console.log(element);
    if (element?.contains('active')) {
      element.remove('active');
    } else {
      element?.add('active');
    }
  }
}
