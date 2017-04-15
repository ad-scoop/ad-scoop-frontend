import { Injectable } from '@angular/core';
import { MdSnackBar } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AlertService {
  private subject = new Subject<any>();

  constructor(private snackBar: MdSnackBar) { }

  success(message: string) {
    this.subject.next({ type: 'success', text: message });
  }

  warn(message: string) {
    this.subject.next({ type: 'warn', text: message });
  }

  error(message: string) {
    this.subject.next({ type: 'error', text: message });
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

}
