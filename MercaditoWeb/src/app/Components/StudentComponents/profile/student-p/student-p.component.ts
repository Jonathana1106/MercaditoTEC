import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/users/student.service';
import { Estudiantes } from 'src/app/models/users/student';
import { FirebaseService } from 'src/app/services/Auth/firebase.service';

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
  constructor(public studentService: StudentService, public firebase : FirebaseService) { }

  ngOnInit(): void {
    
    this.studentService.getStudents().subscribe((students) => {
      this.studentslist = students;   })
  }

  display(toShow:string){
    if(toShow=="data"){
      this.personalData=!this.personalData;
      this.assesment=false;
    }
    if(toShow=="evaluaciones"){
      this.personalData=false;
      this.assesment=!this.assesment;
    }  
  }

  getInputValues(){
    var dbId= ((<HTMLInputElement>document.getElementById("dbId")).value);
    var name= ((<HTMLInputElement>document.getElementById("modifiedName")).value);
    var lastname= ((<HTMLInputElement>document.getElementById("modifiedLastname")).value);  
    var email= parseFloat((<HTMLInputElement>document.getElementById("modifiedEmail")).value);
    var id= parseFloat((<HTMLInputElement>document.getElementById("modifiedId")).value);
    var cel= parseFloat((<HTMLInputElement>document.getElementById("modifiedCel")).value);
  }


}
