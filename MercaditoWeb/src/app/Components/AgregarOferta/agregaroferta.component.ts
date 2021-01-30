import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FirebaseService } from 'src/app/services/Auth/firebase.service';
import { AdminFirebaseService } from 'src/app/services/auth/admin/admin-firebase.service';
import { CurrentUserService } from 'src/app/services/auth/currentUser/current-user.service';
import { Oferta } from 'src/app/models/users/oferta';
import { OfertaService } from 'src/app/services/users/oferta.service';

import { of } from 'rxjs';
declare var $: any;


@Component({
  selector: 'app-AgregarOferta',
  templateUrl: './agregaroferta.component.html',
  styleUrls: ['./agregaroferta.component.css']
})
export class AgregarOfertaComponent implements OnInit {

  constructor(public ofertaService: OfertaService) {

  }
  

  ngOnInit(): void {

    var init = this.ofertaService;
    $(document).ready(function () {
      $("#enviar").click(function () {
        var descripcion = $("#Descripcion").val();
        var base = $("#Base").val();
        var requisitos = $("#Requisitos").val();
        var descripcionr = $("#Responsabilidades").val();
        var nombre = $("#Nombre").val();
        var oportunidad = $("#Oportunidad").val();
        var empresa = $("#Empresa").val();
        var ubicacion = $("#Ubicacion").val();

        return init.sendData(oportunidad, descripcion, descripcionr, empresa, requisitos, base, ubicacion, nombre);
      });
    })

  }


}
