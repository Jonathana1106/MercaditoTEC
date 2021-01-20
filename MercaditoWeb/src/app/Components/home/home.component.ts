import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FirebaseService } from 'src/app/services/Auth/firebase.service';
import { AdminFirebaseService } from 'src/app/services/auth/admin/admin-firebase.service'
import { CurrentUserService } from 'src/app/services/auth/currentUser/current-user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Output() isLogout=new EventEmitter<void>()
  constructor(public firebaseService: FirebaseService, public adminFirebaseService:AdminFirebaseService, public userService: CurrentUserService) { }


  ngOnInit(): void {
  }
  //Student logout
  logout(){
    this.firebaseService.logout()
    this.userService.user = 'None';
    this.isLogout.emit()
  }


}
