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
  getPacientes(): Observable<Estudiantes[]> {
    return this.http.get<Estudiantes[]>('https://localhost:5001/api/pacientes');

  }

  sendData(idEstudiante,carnet,nombre,apellidos,puntos,tel,fechaActividad,correo) {
    return this.http.post('https://localhost:5001/api/pacientes', {
      IdEstudiante: idEstudiante, Nombre: nombre, Apellidos: apellidos, Telefono: tel, Carnet: carnet, Puntos: puntos, 
      FechaActividad: fechaActividad, Correo: correo,
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

    return this.http.delete('https://localhost:5001/api/pacientes/' + id).subscribe(
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


  modificar(ced, nom, ape, tel, fecha, dir, trat, pat, dr, est, cont) {
    return this.http.put('https://localhost:5001/api/pacientes/' + ced, {
      cedula: ced, nombre: nom, apellidos: ape, telefono: tel, nacimiento: fecha, direccion: dir, tratamiento: trat, patologias: pat,
      estado: est, contraseña: cont,
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
