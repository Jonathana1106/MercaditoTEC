import { Injectable } from '@angular/core';
import { Estudiantes } from 'src/app/models/users/student';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  students:Estudiantes[];
  /* jsonAnswer:Estudiantes[];
   userData = new BehaviorSubject(this.user); 
 */
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


  /* Obtener id del estudiante */
  /* getStudentId(){
    var studentObject = JSON.parse(JSON.stringify(this.jsonAnswer));
    var checking= studentObject.map(e=> e.IDEstudiante);
    localStorage.setItem('userId', checking);
    alert(localStorage.getItem('userId'));
  }

  set user(value:string) {
    this.userData.next(value); // this will make sure to tell every subscriber about the change.
    localStorage.setItem('userId', value);
  }
 
  get user() {
    return localStorage.getItem('userId');
  } */
  

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


/*   modify( id,carnet,nombre,apellidos,puntos,tel,fechaActividad,correo ) {
    return this.http.put('https://localhost:44391/estudiante/' + id, {IDEstudiante: id, Nombre: nombre, Apellidos: apellidos, Correo: correo,
    Puntos: puntos, Telefono: tel, Carnet: carnet, FechaActividad: fechaActividad,
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

  } */

  modify(id,nombre,carnet,correo ,apellidos ,puntos,tel,fechaActividad  ) {
    return this.http.put('https://localhost:44391/estudiante/' + id, {IDEstudiante: id, Nombre: nombre, Apellidos: apellidos, Correo: correo,
    Puntos: puntos, Telefono: tel, Carnet: carnet, FechaActividad: fechaActividad,
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
