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
  name:string;
  lastName:string;
  cel:number;

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

  getGeneralData(){
    this.name= ((<HTMLInputElement>document.getElementById("name")).value);
    this.lastName=((<HTMLInputElement>document.getElementById("lastName")).value);
    this.cel=parseFloat((<HTMLInputElement>document.getElementById("phone")).value);
    alert(this.cel)
  }

  createStudent(){
    var email= ((<HTMLInputElement>document.getElementById("studentEmail")).value);
    //Call service method
  }

  createAdmin(){
    var email= ((<HTMLInputElement>document.getElementById("adminEmail")).value);
    var id= parseFloat((<HTMLInputElement>document.getElementById("phone")).value);
    //Call service method
  }

  createEmployer(){
    var email= ((<HTMLInputElement>document.getElementById("employerEmail")).value);
    var id= parseFloat((<HTMLInputElement>document.getElementById("employerId")).value);
    var company= ((<HTMLInputElement>document.getElementById("company")).value);
    var companyEmail=((<HTMLInputElement>document.getElementById("companyEmail")).value);
    var companyNumber= parseFloat((<HTMLInputElement>document.getElementById("companyNumber")).value);
    //Call service method
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
