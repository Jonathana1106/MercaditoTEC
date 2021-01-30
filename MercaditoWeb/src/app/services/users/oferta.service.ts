import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Oferta } from 'src/app/models/users/oferta';

@Injectable({
  providedIn: 'root'
})
export class OfertaService {
  oferta:Oferta[];


  constructor(private http: HttpClient) { }
  getOferta(): Observable<Oferta[]> {
    return this.http.get<Oferta[]>('https://localhost:44391/ofertalaboral');

  }

  getOfertaById(id): Observable<Oferta> {
    return this.http.get<Oferta>('https://localhost:44391/ofertalaboral/'+id);

  }

  sendData(opp,descrp,res,emp,req,base,ub, ofer) {
    return this.http.post('https://localhost:44391/ofertalaboral', {
      Oportunidad: opp, DescripcionPuesto: descrp, Responsabilidades: res, Empresa: emp, Requisitos: req, BaseSalarial: parseInt(base),
      Ubicacion: ub, Ofertante: parseInt(ofer)
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

    return this.http.delete('https://localhost:44391/ofertalaboral/' + id).subscribe(
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


  modificar(id, opp, descrp, res, emp, req, base, ub, ofer) {
    return this.http.put('https://localhost:44391/ofertalaboral/' + id, {IDOferta: id,
      Oportunidad: opp, DescripcionPuesto: descrp, Responsabilidades: res, Empresa: emp, Requisitos: req, BaseSalarial: base,
      Ubicacion: ub, Ofertante: ofer
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
