import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'taomish-ui-base',
  template: '',
})
export class BaseComponent implements OnDestroy {
  destroy$ = new Subject<boolean>();

  ngOnDestroy() {
    console.log("destroyed")
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
