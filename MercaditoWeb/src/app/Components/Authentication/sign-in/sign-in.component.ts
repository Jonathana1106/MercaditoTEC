import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FirebaseService } from 'src/app/services/Auth/firebase.service';
import { Estudiantes } from 'src/app/models/users/student';
import { Admin } from 'src/app/models/users/admin';
import { Employer } from 'src/app/models/users/employer';
import {CurrentUserService} from 'src/app/services/auth/currentUser/current-user.service';
import { StudentService } from 'src/app/services/users/student.service';
import { AdminService } from 'src/app/services/users/admin.service';
import { EmployerService } from 'src/app/services/users/employer.service';

declare var $:any;
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  isSignedIn=false
  students:Estudiantes[];
  admins:Admin[];
  employers:Employer[];
  userType:string;
  admin:boolean;
  employer:boolean;
  student:boolean;
  
  constructor(public firebaseService : FirebaseService, public userService: CurrentUserService, public studentService: StudentService,
    public adminService:AdminService, public employerService: EmployerService){}
  
  ngOnInit(){
    

    if(localStorage.getItem('user')!== null){
    this.isSignedIn=true
    console.log(this.isSignedIn);}
    else
    {
      this.isSignedIn=false
      console.log(this.isSignedIn);
    }

    this.studentService.getStudents().subscribe((students) => {
      this.students = students;})

    this.adminService.getAdmins().subscribe((admins) => {
      this.admins = admins;})

    this.employerService.getEmployers().subscribe((employers) => {
      this.employers = employers;})

    
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

  validateStudent(email){
    var studentsObject = JSON.parse(JSON.stringify(this.students));
    var checking= studentsObject.find(e=> e.correo==email);
    if(checking!=null)
      return true;
    else{
      alert('No es un estudiante, por favor vuelva a intentarlo')
      return false;
    }
  }

  validateAdmin(email){
    var adminObject = JSON.parse(JSON.stringify(this.admins));
    var checking= adminObject.find(e=> e.correo==email);
    if(checking!=null)
      return true;
    else{
      alert('No es un administrador, por favor vuelva a intentarlo')
      return false;
    }
  }

  validateEmployer(email){
    var employerObject = JSON.parse(JSON.stringify(this.employers));
    var checking= employerObject.find(e=> e.correo==email);
    if(checking!=null)
      return true;
    else{
      alert('No es un empleador, por favor vuelva a intentarlo')
      return false;
    }
  }
  

  async onSignin(email:string,password:string){
    if(this.admin && this.validateAdmin(email)){
      await this.firebaseService.signin(email,password)
      if(this.firebaseService.isLoggedIn)
      this.isSignedIn=true
      this.sendMessage()
    }
    if(this.employer && this.validateEmployer(email)){
      await this.firebaseService.signin(email,password)
      if(this.firebaseService.isLoggedIn)
      this.isSignedIn=true
      this.sendMessage()
    }
    if(this.student && this.validateStudent(email)){
      await this.firebaseService.signin(email,password)
      if(this.firebaseService.isLoggedIn)
      this.isSignedIn=true
      this.sendMessage()
    }
  }

  handleLogout(){
    this.isSignedIn=false
 
  }
  


}
