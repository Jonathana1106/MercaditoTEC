import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FirebaseService } from 'src/app/services/Auth/firebase.service';
import { AdminFirebaseService } from 'src/app/services/auth/admin/admin-firebase.service';
import { CurrentUserService } from 'src/app/services/auth/currentUser/current-user.service';

import { of } from 'rxjs';
declare var $: any;


@Component({
  selector: 'app-AgregarOferta',
  templateUrl: './agregaroferta.component.html',
  styleUrls: ['./agregaroferta.component.css']
})
export class AgregarOfertaComponent implements OnInit {

  

  ngOnInit(): void {

    $(document).ready(function () {
      $("#enviar").click(function () {
        var descripcion = $("#escribirDescripcion").val();
        var base = $("#base").val();
        var requisitos = $("#requisitos").val();
        var descripcionr = $("#descripcionr").val();
        var nombre = $("#nombre").val();
        var oportunidad = $("#oportunidad").val();
        var empresa = $("#empresa").val();
        var ubicacion = $("#ubicacion").val();
        /*this.PatientsService.sendData(name,lastName,id,age,nationality,region,pathologies,states,medication,intern,uci);*/
      });
    })

  }


}
