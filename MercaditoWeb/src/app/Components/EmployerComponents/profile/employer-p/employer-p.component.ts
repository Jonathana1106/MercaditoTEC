import { Component, OnInit } from '@angular/core';
import { Employer } from 'src/app/models/users/employer';
import { EmployerService } from 'src/app/services/users/employer.service';

@Component({
  selector: 'app-employer-p',
  templateUrl: './employer-p.component.html',
  styleUrls: ['./employer-p.component.css']
})
export class EmployerPComponent implements OnInit {
  personalData=true;
  employerslist:Employer[]=[];
  currentStudent:Employer;
  nameInput;
  lastNameInput;
  pEmailInput;
  idInput;
  celInput;
  companyInput;
  cEmailInput;
  companyCelInput;

  constructor(public employerService: EmployerService) { }

  ngOnInit(): void {
    
    this.employerService.getEmployers().subscribe((employers) => {
      this.employerslist = employers;   })
  }

  display(toShow:string){
    if(toShow=="data"){
      this.personalData=!this.personalData;
    } 
  }

  getInputValues(){
    var dbId= ((<HTMLInputElement>document.getElementById("dbId")).value);
    var name= ((<HTMLInputElement>document.getElementById("modifiedName")).value);
    var lastname= ((<HTMLInputElement>document.getElementById("modifiedLastName")).value);  
    var email= parseFloat((<HTMLInputElement>document.getElementById("modifiedPersonalEmail")).value);
    var id= parseFloat((<HTMLInputElement>document.getElementById("modifiedId")).value);
    var cel= parseFloat((<HTMLInputElement>document.getElementById("modifiedCel")).value);
    var company= ((<HTMLInputElement>document.getElementById("modifiedCompanyName")).value);  
    var companyEmail= parseFloat((<HTMLInputElement>document.getElementById("modifiedCompanyEmail")).value);
    var companyCel= parseFloat((<HTMLInputElement>document.getElementById("modifiedCompanyCel")).value);
  }
}