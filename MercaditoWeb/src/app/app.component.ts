import { Component, OnInit } from '@angular/core';
import {FirestoreService} from './services/firestore.service';
import { FirebaseService } from './services/firebase.service';
import { Estudiantes } from './models/Estudiantes';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MercaditoWeb';

  isSignedIn=false
  students:Estudiantes[];
  exist:boolean=false;
  studentEmail:string;
  delay:any;

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


    if(localStorage.getItem('user')!== null)
    this.isSignedIn=true
    else
    this.isSignedIn=false

  
    
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
