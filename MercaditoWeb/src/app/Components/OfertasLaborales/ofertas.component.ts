import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FirebaseService } from 'src/app/services/Auth/firebase.service';
import { AdminFirebaseService } from 'src/app/services/auth/admin/admin-firebase.service';
import { CurrentUserService } from 'src/app/services/auth/currentUser/current-user.service';
import { Oferta } from 'src/app/models/users/oferta';
import { OfertaService } from 'src/app/services/users/oferta.service';
import { of } from 'rxjs';
import {SharedModule} from 'src/app/shared.module'


@Component({
  selector: 'app-OfertasLaborales',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css'],
})
export class OfertasComponent implements OnInit {

  constructor(public ofertaService: OfertaService) { }
  ofertaList: Oferta[]=[]

  

  ngOnInit(): void {
    var init = this.ofertaService;
    this.ofertaService.getOferta().subscribe((ofertas) => {
      this.ofertaList = ofertas;
    })

  }



}
