import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  isNext: boolean = false;
  stepInfo: Object = {};

  isNextSubject = new Subject<boolean>();

  stepInfoSubject = new Subject<Object>();

  constructor() { }

  emitIsNext(): void {
    this.isNextSubject.next(this.isNext);
  }

  emitStepInfo(): void {
    this.stepInfoSubject.next(this.stepInfo);
  }
}
