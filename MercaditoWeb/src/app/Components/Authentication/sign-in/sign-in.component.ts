import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FirebaseService } from 'src/app/services/Auth/firebase.service';
import { Estudiantes } from 'src/app/models/users/student';
import {CurrentUserService} from 'src/app/services/auth/currentUser/current-user.service';

declare var $:any;
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  isSignedIn=false
  students:Estudiantes[];
  userType:string;
  admin:boolean;
  employer:boolean;
  student:boolean;
  
  constructor(public firebaseService : FirebaseService, public userService: CurrentUserService){}
  
  ngOnInit(){
    

    if(localStorage.getItem('user')!== null){
    this.isSignedIn=true
    console.log(this.isSignedIn);}
    else
    {
      this.isSignedIn=false
      console.log(this.isSignedIn);
    }

    

    
  }

  studentLogged() {
    this.student=!this.student;
    this.employer=false;
    this.admin=false;
  }
  employerLogged() {
    this.employer=!this.employer;
    this.student=false;
    this.admin=false;
  }

  adminLogged() {
    this.admin=!this.admin;
    this.student=false;
    this.employer=false;
  }

  sendMessage(){
    if(this.admin)
    this.userService.user = 'Admin';
    if(this.employer)
    this.userService.user = 'Employer';
    if(this.student)
    this.userService.user = 'Student';
  }
  

  async onSignin(email:string,password:string){
    await this.firebaseService.signin(email,password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn=true
  }

  handleLogout(){
    this.isSignedIn=false
 
  }

}
