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
  oferta:Oferta[]=[]
  
  ngOnInit(): void {
    var init = this.oferta;
    var init2 = this.ofertaService

    var num = this.prueba
    alert(this.prueba)
    init = init2.getOfertaById(parseInt(num));
    alert(init[0].DescripcionPuesto);
    document.getElementById("eDescripcion").innerHTML = init[0].DescripcionPuesto;
    document.getElementById("eBase").innerHTML = "h";
    document.getElementById("eRequisitos").innerHTML = init[0].Requisitos;
    document.getElementById("eResponsabilidades").innerHTML = init[0].Responsabilidades;
    document.getElementById("eNombre").innerHTML = "";
    document.getElementById("eOportunidad").innerHTML = init[0].Oportunidad;
    document.getElementById("eEmpresa").innerHTML = init[0].Empresa;
    document.getElementById("eUbicacion").innerHTML = init[0].Ubicacion;
    $(document).ready(function () {
      $("#enviar").click(function () {
        
      })
       })
      
    
  }


}
