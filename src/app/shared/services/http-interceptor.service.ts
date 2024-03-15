import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, finalize } from 'rxjs';
import { SpinnerService } from './spinner.service';

@Injectable({
  providedIn: 'root',
})
export class HttpInterceptorService implements HttpInterceptor {
  private activeRequests = 0;
  constructor(private spinnerService: SpinnerService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('start');
    // Increment the active requests counter
    this.activeRequests++;

    // Show the spinner if it's the first request
    if (this.activeRequests === 1) {
      this.spinnerService.showSpinner();
    }
    // this.spinnerService.showSpinner();
    return next.handle(req).pipe(
      finalize(() => {
        // Decrement the active requests counter
        this.activeRequests--;

        // Hide the spinner if there are no more active requests
        if (this.activeRequests === 0) {
          console.log('done');
          this.spinnerService.hideSpinner();
        }
      })
    );
  }
}
