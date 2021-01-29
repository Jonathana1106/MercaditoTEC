import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FirebaseService } from 'src/app/services/Auth/firebase.service';
import { AdminFirebaseService } from 'src/app/services/auth/admin/admin-firebase.service';
import { CurrentUserService } from 'src/app/services/auth/currentUser/current-user.service';

import { of } from 'rxjs';
declare var $: any;
@Component({
  selector: 'app-Ofertas',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css']
})
export class OfertaComponent implements OnInit {

  ngOnInit(): void {

    $(document).ready(function () {
      $("#enviar").click(function () {
        document.getElementById("eDescripcion").innerHTML = "a";
        document.getElementById("eBase").innerHTML = "b";
        document.getElementById("eRequisitos").innerHTML = "c";
        document.getElementById("eResponsabilidades").innerHTML = "d";
        document.getElementById("eNombre").innerHTML = "a";
        document.getElementById("eOportunidad").innerHTML = "b";
        document.getElementById("eEmpresa").innerHTML = "c";
        document.getElementById("eUbicacion").innerHTML = "d";
      })
       })
      
    
  }


}
