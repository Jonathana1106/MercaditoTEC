import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  
  constructor() { }

  userType = new BehaviorSubject(this.user);

 set user(value:string) {
   this.userType.next(value); // this will make sure to tell every subscriber about the change.
   localStorage.setItem('userType', value);
 }



 get user() {
   return localStorage.getItem('userType');
 }

}
