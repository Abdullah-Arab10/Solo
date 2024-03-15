import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  constructor() {}
  private loadingSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(true);
  loading$ = this.loadingSubject.asObservable();
  showSpinner() {
    this.loadingSubject.next(true);
  }
  hideSpinner() {
    this.loadingSubject.next(false);
  }
}
