import { Component, OnInit } from '@angular/core';
import {FirestoreService} from 'src/app/services/auth/firestore.service';
import { FirebaseService } from 'src/app/services/Auth/firebase.service';
import { Estudiantes } from 'src/app/models/users/student';
import {CurrentUserService} from 'src/app/services/auth/currentUser/current-user.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{

  isSignedIn=false
  students:Estudiantes[];
  adminNav="hola";
  studentNav:boolean;
  employerNav:boolean;
  userType:string;


  constructor(public firebaseService : FirebaseService,
    public firestoreService : FirestoreService, public userService: CurrentUserService ){}
  
  ngOnInit(){
    this.userService.currentUser.subscribe(userType => this.userType = userType )

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



 

  async onSignup(email:string,password:string){
    let validatingEmail=this.students.find(x =>  x.correo === email)
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
