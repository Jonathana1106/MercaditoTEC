import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject'

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  private userSource = new BehaviorSubject<string>("No user");
  currentUser=this.userSource.asObservable();

  constructor() { }

  changeMessage(userType:string){
    this.userSource.next(userType);
  }
}
