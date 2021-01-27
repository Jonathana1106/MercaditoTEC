import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FirebaseService } from 'src/app/services/Auth/firebase.service';
import { AdminFirebaseService } from 'src/app/services/auth/admin/admin-firebase.service';
import { CurrentUserService } from 'src/app/services/auth/currentUser/current-user.service';


@Component({
  selector: 'app-AgregarOferta',
  templateUrl: './agregaroferta.component.html',
  styleUrls: ['./agregaroferta.component.css']
})
export class AgregarOfertaComponent implements OnInit {

  

  ngOnInit(): void {

  }


}
