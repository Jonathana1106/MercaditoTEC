import { Component, OnInit } from '@angular/core';
import { Employer } from 'src/app/models/users/employer';
import { EmployerService } from 'src/app/services/users/employer.service';
import {DataService} from 'src/app/services/auth/currentUser/data.service';


@Component({
  selector: 'app-employer-p',
  templateUrl: './employer-p.component.html',
  styleUrls: ['./employer-p.component.css']
})
export class EmployerPComponent implements OnInit {
  personalData=true;
  employerslist:Employer[]=[];
  currentStudent:Employer;
  userId;
  nameInput;
  lastNameInput;
  pEmailInput;
  idInput;
  celInput;
  companyInput;
  cEmailInput;
  companyCelInput;
  userCurrentEmail:string;

  constructor(public employerService: EmployerService, public userData:DataService) { 
    userData.userEmail.subscribe((nextValue) => {
      this.userCurrentEmail=nextValue;
   })
   
  }

  ngOnInit(): void {
    
    this.employerService.getEmployers().subscribe((employers) => {
      this.employerslist = employers; 
      this.getEmployerData(this.userCurrentEmail)  })
  }

  display(toShow:string){
    if(toShow=="data"){
      this.personalData=!this.personalData;
    } 
  }

  getEmployerData(email){
    var employerObject = JSON.parse(JSON.stringify(this.employerslist));
    var checking= JSON.parse(JSON.stringify(employerObject.find(e=> e.correo==email)));
    console.log(checking);
    this.idInput=checking.cedula;
    this.pEmailInput=checking.correo;
    this.nameInput=checking.nombre;
    this.lastNameInput=checking.apellido;
    this.celInput=checking.telefono;
    this.userId=checking.idEmpleador;
    this.companyInput=checking.nombreEmpresa;
    this.cEmailInput=checking.correoEmpresa;
    this.companyCelInput=checking.telefonoEmpresa;

  }
}