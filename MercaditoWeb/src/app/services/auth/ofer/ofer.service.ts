import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
@Injectable({
  providedIn: 'root'
})
export class Ofer {

  
  constructor() { }

  numb = new BehaviorSubject(this.num);



  set num(value: string) {
    this.numb.next(value);
    localStorage.setItem('numb', value);
  }

  get num() {
    return localStorage.getItem('numb');
  }


}
