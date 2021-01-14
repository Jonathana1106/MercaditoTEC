import { Component, OnInit } from '@angular/core';
import {FirestoreService} from 'src/app/services/firestore.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Estudiantes } from 'src/app/models/Estudiantes';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isSignedIn=false
  students:Estudiantes[];


  constructor(public firebaseService : FirebaseService,
    public firestoreService : FirestoreService ){}
  
  ngOnInit(){
    this.firestoreService.getStudents().subscribe(students=>{
        console.log(students);
        this.students=students;
    })

/*     
    $(document).ready(function () {
      $("#SignUp").click(function () {
        this.studentEmail = $("#email").val();
        console.log(this.studentEmail);
      });
    }) */


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
