import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FirebaseService } from 'src/app/services/Auth/firebase.service';
import { AdminFirebaseService } from 'src/app/services/auth/admin/admin-firebase.service';
import { CurrentUserService } from 'src/app/services/auth/currentUser/current-user.service';


@Component({
  selector: 'app-Dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  

  ngOnInit(): void {
  }


}
