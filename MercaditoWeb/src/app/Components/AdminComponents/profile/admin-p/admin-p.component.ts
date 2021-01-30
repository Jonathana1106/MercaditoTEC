import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/models/users/admin';
import { AdminService } from 'src/app/services/users/admin.service';
import {DataService} from 'src/app/services/auth/currentUser/data.service';


@Component({
  selector: 'app-admin-p',
  templateUrl: './admin-p.component.html',
  styleUrls: ['./admin-p.component.css']
})
export class AdminPComponent implements OnInit {

  personalData=true;
  points=false;
  courses=false;
  categories=false;
  adminslist:Admin[]=[];
  currentAdmin:Admin;
  userCurrentEmail;
  idInput;
  emailInput;
  nameInput;
  lastNameInput;
  celInput;
  productPointsInput;
  servicesPointsInput;
  colonsEqInput;
  editCourseInput;
  deleteCourseInput;
  addCourseInput;
  editCategInput;
  deleteCategInput;
  addCategInput;
  constructor(public adminService: AdminService, public userData:DataService) {
    userData.userEmail.subscribe((nextValue) => {
      this.userCurrentEmail=nextValue;
   })
   }

  ngOnInit(): void {
    
    this.adminService.getAdmins().subscribe((admins) => {
      this.adminslist = admins;  
      this.getAdminData(this.userCurrentEmail) })
  }

  display(toShow:string){
    if(toShow=="data"){
      this.personalData=!this.personalData;
      this.points=false;
      this.courses=false;
      this.categories=false;
    }
    if(toShow=="points"){
      this.personalData=false;
      this.points=!this.points;
      this.courses=false;
      this.categories=false;
    } 
    if(toShow=="courses"){
      this.personalData=false;
      this.points=false;
      this.courses=!this.courses;
      this.categories=false;
    }  
    if(toShow=="categories"){
      this.personalData=false;
      this.points=false;
      this.courses=false;
      this.categories=!this.categories;
    } 
  }

  getAdminData(email){
    var adminObject = JSON.parse(JSON.stringify(this.adminslist));
    var checking= JSON.parse(JSON.stringify(adminObject.find(e=> e.correo==email)));
    console.log(checking);
    this.idInput=checking.cedula;
    this.emailInput=checking.correo;
    this.nameInput=checking.nombre;
    this.lastNameInput=checking.apellidos;
    this.celInput=checking.telefono;

  }

}