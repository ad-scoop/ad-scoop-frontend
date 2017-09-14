import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

export interface Event {

  message(): any;

}

@Injectable()
export class EventService {

  private subject = new Subject<any>();

  sendEvent(event: Event) {
    this.subject.next({event: event});
  }

  clearEvent() {
    this.subject.next();
  }

  getEvent(): Observable<Event> {
    return this.subject.asObservable();
  }

}
