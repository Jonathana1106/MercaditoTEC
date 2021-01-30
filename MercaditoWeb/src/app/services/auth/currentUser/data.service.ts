import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  userEmail = new BehaviorSubject(this.email);

  constructor() { }

  set email(value:string) {
    this.userEmail.next(value); // this will make sure to tell every subscriber about the change.
    localStorage.setItem('userEmail', value);
  }
  
    get email() {
      return localStorage.getItem('userEmail');
    }
}
