import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FirebaseService } from 'src/app/services/Auth/firebase.service';
import { Estudiantes } from 'src/app/models/users/student';
import {AdminFirebaseService} from 'src/app/services/auth/admin/admin-firebase.service';
import {AdminFirestoreService} from 'src/app/services/auth/admin/admin-firestore.service';
import {Admin} from 'src/app/models/users/admin';
import {EmployerFirebaseService} from 'src/app/services/auth/employer/employer-firebase.service';
import {EmployerFirestoreService} from 'src/app/services/auth/employer/employer-firestore.service';
import {Employer} from 'src/app/models/users/employer';
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
  
  @Output() messageEvent=new EventEmitter<boolean>();

  constructor(public firebaseService : FirebaseService, public userService: CurrentUserService){}
  
  ngOnInit(){
    

    this.userService.currentUser.subscribe(userType => this.userType = userType )

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
    this.userService.changeMessage("Admin")
    if(this.employer)
    this.userService.changeMessage("Employer")
    if(this.student)
    this.userService.changeMessage("Student")
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
