import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {
  private subject = new Subject<any>();

  constructor() { }

  sendMessage(message: any) {
    var mg = JSON.stringify(message);
    this.subject.next({ mg  });
    console.log('message sent', mg);
}
onMessage(): Observable<any> {
  return this.subject.asObservable();
}
}
