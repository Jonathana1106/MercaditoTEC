import { Component, OnInit } from '@angular/core';
import {FirestoreService} from 'src/app/services/auth/firestore.service';
import { FirebaseService } from 'src/app/services/Auth/firebase.service';
import { Estudiantes } from 'src/app/models/users/student';
import {AdminFirebaseService} from 'src/app/services/auth/admin/admin-firebase.service';
import {AdminFirestoreService} from 'src/app/services/auth/admin/admin-firestore.service';
import {Admin} from 'src/app/models/users/admin';
import {EmployerFirebaseService} from 'src/app/services/auth/employer/employer-firebase.service';
import {EmployerFirestoreService} from 'src/app/services/auth/employer/employer-firestore.service';
import {Employer} from 'src/app/models/users/employer';
import { StudentService } from 'src/app/services/users/student.service';
import { EmployerService } from 'src/app/services/users/employer.service';
import { AdminService } from 'src/app/services/users/admin.service';
import {CurrentUserService} from 'src/app/services/auth/currentUser/current-user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  isSignedIn=false;
  students:Estudiantes[];
  admins:Admin[];
  employers:Employer[];

  userSignUpType:string;
  admin:boolean;
  employer:boolean;
  student:boolean;
  name:string;
  lastName:string;
  cel:number;

  constructor(public firebaseService : FirebaseService,
    public firestoreService : FirestoreService, public adminFirebaseService:AdminFirebaseService,
    public adminFirestoreService: AdminFirestoreService,public employerFirebaseService:EmployerFirebaseService,
    public employerFirestoreService: EmployerFirestoreService, public studentService:StudentService,
    public adminService:AdminService, public employerService:EmployerService, public userService: CurrentUserService){}
  
  ngOnInit(){
    this.firestoreService.getStudents().subscribe(students=>{
        console.log(students);
        this.students=students;
    })

    this.adminFirestoreService.getAdmins().subscribe(admins=>{
      console.log(admins);
      this.admins=admins;
    })

    this.employerFirestoreService.getEmployers().subscribe(employers=>{
      console.log(employers);
      this.employers=employers;
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
  sendMessage(){
    if(this.admin)
    this.userService.user = 'Admin';
    if(this.employer)
    this.userService.user = 'Employer';
    if(this.student)
    this.userService.user = 'Student';
  }

  getGeneralData(){
    this.name= ((<HTMLInputElement>document.getElementById("name")).value);
    this.lastName=((<HTMLInputElement>document.getElementById("lastName")).value);
    this.cel=parseFloat((<HTMLInputElement>document.getElementById("phone")).value);
  }

  createStudent(){
    var email= ((<HTMLInputElement>document.getElementById("studentEmail")).value);
    var studentCard= parseFloat((<HTMLInputElement>document.getElementById("studentCard")).value);
    this.studentService.sendData(studentCard,this.name,this.lastName,0,this.cel,'',email); 
  }

  createAdmin(){
    var email= ((<HTMLInputElement>document.getElementById("adminEmail")).value);
    var id= parseFloat((<HTMLInputElement>document.getElementById("adminId")).value);
    this.adminService.sendData(id,this.name,this.lastName,this.cel,email);
  }

  createEmployer(){
    var email= ((<HTMLInputElement>document.getElementById("employerEmail")).value);
    var id= parseFloat((<HTMLInputElement>document.getElementById("employerId")).value);
    var company= ((<HTMLInputElement>document.getElementById("company")).value);
    var companyEmail=((<HTMLInputElement>document.getElementById("companyEmail")).value);
    var companyNumber= parseFloat((<HTMLInputElement>document.getElementById("companyNumber")).value);
    this.employerService.sendData(companyNumber,this.name,this.lastName,company,this.cel,id,email, companyEmail);

  }

  //Auth del estudiante
  async onSignup(email:string,password:string){
    let validatingEmail=this.students.find(x =>  x.Correo === email)
    if(validatingEmail!==undefined){
      await this.firebaseService.signup(email,password)
      if(this.firebaseService.isLoggedIn )
      this.isSignedIn=true;
      this.sendMessage();
      this.createStudent();
    }
    else
    alert("no existe su correo")
  }


  //Auth del admin
  async adminOnSignup(email:string,password:string){
    let validatingEmail=this.admins.find(x =>  x.Correo === email)
    if(validatingEmail!==undefined){
      await this.adminFirebaseService.adminSignup(email,password)
      if(this.adminFirebaseService.isLoggedIn )
      this.isSignedIn=true;
      this.sendMessage();
      this.createAdmin();
    }
    else
    alert("no existe su correo")
  }


  //Auth del empleador
  async employerOnSignup(email:string,password:string){
    let validatingEmail=this.employers.find(x =>  x.Correo === email)
    if(validatingEmail!==undefined){
      await this.employerFirebaseService.employerSignup(email,password)
      if(this.employerFirebaseService.isLoggedIn )
      this.isSignedIn=true;
      this.sendMessage();
      this.createEmployer();
    }
    else
    alert("no existe su correo")
  }


  handleLogout(){
    this.isSignedIn=false
 
  }


}
