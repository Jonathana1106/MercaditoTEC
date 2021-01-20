import { Injectable } from '@angular/core';
import { Admin } from 'src/app/models/users/admin';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  admins:Admin[];

  constructor(private http: HttpClient) { }
  getAdmins(): Observable<Admin[]> {
    return this.http.get<Admin[]>('https://localhost:44391/administrador');

  }

  sendData(cedula,nombre,apellidos,tel,correo) {
    return this.http.post('https://localhost:44391/administrador', {
      Nombre:nombre, Apellidos:apellidos, Telefono:tel, Cedula:cedula, Correo:correo,
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

    return this.http.delete('https://localhost:44391/administrador/' + cedula).subscribe(
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


  modify(cedula,nombre,apellidos,tel,correo) {
    return this.http.put('https://localhost:44391/administrador/' + cedula, {Nombre:nombre, Apellidos:apellidos, Telefono:tel, Cedula:cedula, Correo:correo,
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
