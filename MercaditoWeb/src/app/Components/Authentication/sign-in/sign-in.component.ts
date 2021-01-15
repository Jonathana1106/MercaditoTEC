import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/Auth/firebase.service';
import { Estudiantes } from 'src/app/models/users/student';
import {AdminFirebaseService} from 'src/app/services/auth/admin/admin-firebase.service';
import {AdminFirestoreService} from 'src/app/services/auth/admin/admin-firestore.service';
import {Admin} from 'src/app/models/users/admin';
import {EmployerFirebaseService} from 'src/app/services/auth/employer/employer-firebase.service';
import {EmployerFirestoreService} from 'src/app/services/auth/employer/employer-firestore.service';
import {Employer} from 'src/app/models/users/employer';

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


  constructor(public firebaseService : FirebaseService,
    ){}
  
  ngOnInit(){


    if(localStorage.getItem('user')!== null){
    this.isSignedIn=true
    console.log(this.isSignedIn);}
    else
    {
      this.isSignedIn=false
      console.log(this.isSignedIn);
    }

    $(document).ready(function(){
      $("#signIn").click(function(){
        this.userType = $("input[type='radio']:checked").val();
        alert(this.userType);
      });
    });
    
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
