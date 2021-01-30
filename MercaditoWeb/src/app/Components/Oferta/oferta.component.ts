import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FirebaseService } from 'src/app/services/Auth/firebase.service';
import { AdminFirebaseService } from 'src/app/services/auth/admin/admin-firebase.service';
import { Ofer } from 'src/app/services/auth/ofer/ofer.service';
import { Oferta } from 'src/app/models/users/oferta';
import { OfertaService } from 'src/app/services/users/oferta.service';
import { of } from 'rxjs';
declare var $: any;

@Component({
  selector: 'app-Ofertas',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css']
})
export class OfertaComponent implements OnInit {
  prueba;
  constructor(public ofertaService: OfertaService, public userService: Ofer) {
    userService.numb.subscribe((nextValue) => {
      this.prueba = nextValue;
    })
  }
  oferta: Oferta


  ngOnInit(): void {
    /* this.oferta= this.ofertaService.getOfertaById(this.prueba);
    alert(this.prueba)
    alert(this.oferta.BaseSalarial);
    //document.getElementById("eDescripcion").innerHTML = init.DescripcionPuesto;
    document.getElementById("eBase").innerHTML = "h";
    document.getElementById("eRequisitos").innerHTML = this.oferta.Requisitos;
    document.getElementById("eResponsabilidades").innerHTML = this.oferta.Responsabilidades;
    document.getElementById("eNombre").innerHTML = "";
    document.getElementById("eOportunidad").innerHTML = this.oferta.Oportunidad;
    document.getElementById("eEmpresa").innerHTML = this.oferta.Empresa;
    document.getElementById("eUbicacion").innerHTML = this.oferta.Ubicacion; */
    $(document).ready(function () {
      $("#enviar").click(function () {
        
      })
       })
      
    
  }


}
