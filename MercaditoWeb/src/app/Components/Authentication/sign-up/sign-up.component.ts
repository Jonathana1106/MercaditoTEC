import { Component, OnInit } from '@angular/core';
import {FirestoreService} from 'src/app/services/auth/firestore.service';
import { FirebaseService } from 'src/app/services/Auth/firebase.service';
import { Estudiantes } from 'src/app/models/users/student';

declare var $:any;
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  isSignedIn=false
  students:Estudiantes[];
  userSignUpType:string;
  admin:boolean;
  employer:boolean;
  student:boolean;

  constructor(public firebaseService : FirebaseService,
    public firestoreService : FirestoreService ){}
  
  ngOnInit(){
    this.firestoreService.getStudents().subscribe(students=>{
        console.log(students);
        this.students=students;
    })


    if(localStorage.getItem('user')!== null){
    this.isSignedIn=true
    console.log(this.isSignedIn);}
    else
    {
      this.isSignedIn=false
      console.log(this.isSignedIn);
    }

  
    
  }

checkStudent() {
  this.student=!this.student;
  this.employer=false;
  this.admin=false;
}
checkEmployer() {
  this.employer=!this.employer;
  this.student=false;
  this.admin=false;
}
checkAdmin() {
   this.admin=!this.admin;
   this.student=false;
   this.employer=false;
 }

  async onSignup(email:string,password:string){
    let validatingEmail=this.students.find(x =>  x.Correo === email)
    if(validatingEmail!==undefined){
      await this.firebaseService.signup(email,password)
      if(this.firebaseService.isLoggedIn )
      this.isSignedIn=true
    }
    else
    alert("no existe su correo") 
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
