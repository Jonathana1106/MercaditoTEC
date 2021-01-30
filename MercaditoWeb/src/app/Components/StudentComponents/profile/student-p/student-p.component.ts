import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/users/student.service';
import { Estudiantes } from 'src/app/models/users/student';
import { CurrentUserService } from 'src/app/services/Auth/currentUser/current-user.service';
import {DataService} from 'src/app/services/auth/currentUser/data.service';

@Component({
  selector: 'app-student-p',
  templateUrl: './student-p.component.html',
  styleUrls: ['./student-p.component.css']
})
export class StudentPComponent implements OnInit {
  personalData=true;
  assesment=false;
  studentslist:Estudiantes[]=[];
  currentStudent:Estudiantes;
  userCurrentEmail:string;
  userId;
  idInput;
  emailInput;
  nameInput;
  lastNameInput;
  celInput;
  pointsInput;
  dateActivity;
  
  constructor(public studentService: StudentService, public userData: DataService ) {
    userData.userEmail.subscribe((nextValue) => {
      this.userCurrentEmail=nextValue;
   })
   }

  ngOnInit(): void {
    
    this.studentService.getStudents().subscribe((students) => {
      this.studentslist = students;
      this.getStudentData(this.userCurrentEmail);  })
    
  }

  getStudentData(email){
    var studentsObject = JSON.parse(JSON.stringify(this.studentslist));
    var checking= JSON.parse(JSON.stringify(studentsObject.find(e=> e.correo==email)));
    console.log(checking);
    this.idInput=checking.carnet;
    this.emailInput=checking.correo;
    this.nameInput=checking.nombre;
    this.lastNameInput=checking.apellidos;
    this.celInput=checking.telefono;
    this.userId=checking.idEstudiante;
    this.pointsInput=checking.puntos;
    this.dateActivity=checking.fechaActividad;
  }

  sendChanges(){
  //this.studentService.modify(this.userId,this.idInput,this.nameInput,this.lastNameInput/*,this.pointsInput,this.celInput,this.dateActivity,this.emailInput */);
  //this.studentService.modify(1,25021458,'this.nameInput','this.lastNameInput',0,6580000,'this.dateActivity','this.emailInput');
    this.studentService.modify(this.userId,this.nameInput,this.idInput, this.emailInput, this.lastNameInput, this.pointsInput, this.celInput, this.dateActivity);  
  }


  display(toShow:string){
    alert()
    if(toShow=="data"){
      this.personalData=!this.personalData;
      this.assesment=false;
    }
    if(toShow=="evaluaciones"){
      this.personalData=false;
      this.assesment=!this.assesment;
    }  
  }

  show(){
    alert(this.userData.email);
  }





}