import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employer } from 'src/app/models/users/employer';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {
  employer:Employer[];

  constructor(private http: HttpClient) { }
  getEmployers(): Observable<Employer[]> {
    return this.http.get<Employer[]>('https://localhost:44391/empleador');

  }

  sendData(telEmpresa,nombre,apellidos,empresa,tel,cedula,correo, correoEmpresa) {
    return this.http.post('https://localhost:44391/empleador', {
      Cedula:cedula,Nombre:nombre, Apellido:apellidos, Correo:correo,  NombreEmpresa:empresa,Telefono:tel, TelefonoEmpresa:telEmpresa, 
      CorreoEmpresa:correoEmpresa, 
    }).subscribe(
      (val) => {
        console.log("POST call successful value returned in body",
          response => {
            console.log("POST call in error", response);
          },
          () => {
            console.log("The POST observable is now completed.");
          });
      });
  }


  delete(cedula) {

    return this.http.delete('https://localhost:44391/empleador/' + cedula).subscribe(
      (val) => {
        console.log("DELETE call successful value returned in body",
          val);
      },
      response => {
        console.log("DELETE call in error", response);
      },
      () => {
        console.log("The DELETE observable is now completed.");
      });
  }


  modificar(telEmpresa,nombre,apellidos,empresa,tel,cedula,correo, correoEmpresa) {
    return this.http.put('https://localhost:44391/empleador/' + cedula, { Nombre:nombre, Apellido:apellidos, Telefono:tel, Cedula:cedula, NombreEmpresa:empresa, TelefonoEmpresa:telEmpresa, 
    CorreoEmpresa:correoEmpresa, Correo:correo,
    }).subscribe(
      (val) => {
        console.log("PUT call successful value returned in body",
          val);
      },
      response => {
        console.log("PUT call in error", response);
      },
      () => {
        console.log("The PUT observable is now completed.");
      });

  }
}
