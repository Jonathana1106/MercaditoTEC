import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/models/users/admin';
import { AdminService } from 'src/app/services/users/admin.service';

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
  constructor(public adminService: AdminService) { }

  ngOnInit(): void {
    
    this.adminService.getAdmins().subscribe((admins) => {
      this.adminslist = admins;   })
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

  getInputValues(){
    var dbId= ((<HTMLInputElement>document.getElementById("dbId")).value);
    var name= ((<HTMLInputElement>document.getElementById("modifiedName")).value);
    var lastname= ((<HTMLInputElement>document.getElementById("modifiedLastname")).value);  
    var email= parseFloat((<HTMLInputElement>document.getElementById("modifiedEmail")).value);
    var id= parseFloat((<HTMLInputElement>document.getElementById("modifiedId")).value);
    var cel= parseFloat((<HTMLInputElement>document.getElementById("modifiedCel")).value);
  }

}
