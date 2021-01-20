import { Injectable } from '@angular/core';
import { Estudiantes } from 'src/app/models/users/student';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  students:Estudiantes[];

  constructor(private http: HttpClient) { }
  getStudents(): Observable<Estudiantes[]> {
    return this.http.get<Estudiantes[]>('https://localhost:44391/estudiante');

  }

  sendData(carnet,nombre,apellidos,puntos,tel,fechaActividad,correo) {
    return this.http.post('https://localhost:44391/estudiante', {
       Nombre: nombre, Apellidos: apellidos, Correo: correo,Puntos: puntos, Telefono: tel, Carnet: carnet,  
      FechaActividad: fechaActividad,
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


  delete(id) {

    return this.http.delete('https://localhost:44391/estudiante/' + id).subscribe(
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


  modify(id,carnet,nombre,apellidos,puntos,tel,fechaActividad,correo) {
    return this.http.put('https://localhost:44391/estudiante/' + id, {Nombre: nombre, Apellidos: apellidos, Correo: correo,Puntos: puntos, Telefono: tel, Carnet: carnet,  
    FechaActividad: fechaActividad,
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
