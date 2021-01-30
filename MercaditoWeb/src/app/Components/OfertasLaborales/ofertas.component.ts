import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FirebaseService } from 'src/app/services/Auth/firebase.service';
import { AdminFirebaseService } from 'src/app/services/auth/admin/admin-firebase.service';
import { Ofer } from 'src/app/services/auth/ofer/ofer.service';
import { Oferta } from 'src/app/models/users/oferta';
import { OfertaService } from 'src/app/services/users/oferta.service';
import { of } from 'rxjs';
import { SharedModule } from 'src/app/shared.module';

declare var $: any;
@Component({
  selector: 'app-OfertasLaborales',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css'],
})
export class OfertasComponent implements OnInit {

  constructor(public ofertaService: OfertaService, public userService: Ofer) { }
  ofertaList: Oferta[] = []
  



  ngOnInit(): void {
    var init = this.ofertaService;
    this.ofertaService.getOferta().subscribe((ofertas) => {
      this.ofertaList = ofertas;
    })




  }



  ngDoCheck(): void {
    var llavePrimaria;
    var init = this.userService;
    $(document).ready(function () {
      $(".ir").click(function () {
        var $row = $(this).closest("tr");    // Find the row
        llavePrimaria = $row.find("td:eq(0)").text(); // Find the text
        
        init.num = llavePrimaria;
      });
    })


  }
}
