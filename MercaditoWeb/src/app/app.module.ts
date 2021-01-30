//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {AngularFireModule} from '@angular/fire'; 
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';
 
import { AppComponent } from './app.component';
import {FirebaseService  } from './services/Auth/firebase.service';
import {FirestoreService} from './services/auth/firestore.service';
import {AdminFirebaseService } from './services/auth/admin/admin-firebase.service';
import {AdminFirestoreService } from './services/auth/admin/admin-firestore.service';
import {EmployerFirebaseService } from './services/auth/employer/employer-firebase.service';
import {EmployerFirestoreService } from './services/auth/employer/employer-firestore.service';
import { HomeComponent } from './Components/home/home.component';
import { SignUpComponent } from './Components/Authentication/sign-up/sign-up.component';
import { NavComponent } from './Components/sharedComponents/nav/nav.component';
import { SignInComponent } from './Components/Authentication/sign-in/sign-in.component';
import { StudentService } from 'src/app/services/users/student.service';
import { AdminService } from 'src/app/services/users/admin.service';
import { EmployerService } from 'src/app/services/users/employer.service';
import { StudentPComponent } from './Components/StudentComponents/profile/student-p/student-p.component';
import { EmployerPComponent } from './Components/EmployerComponents/profile/employer-p/employer-p.component';
import { AdminPComponent } from './Components/AdminComponents/profile/admin-p/admin-p.component';
import { OfertaComponent } from './Components/Oferta/oferta.component';
import { OfertaService } from './services/users/oferta.service';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignUpComponent,
    NavComponent,
    SignInComponent,
    StudentPComponent,
    EmployerPComponent,
    AdminPComponent,
    OfertaComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAPoboWgej6xEfOfonCOoY8w-BKzUWdlPM",
      authDomain: "datic-85b5f.firebaseapp.com",
      projectId: "datic-85b5f",
      storageBucket: "datic-85b5f.appspot.com",
      messagingSenderId: "563135988942",
      appId: "1:563135988942:web:fa0ad9720c5955c81bfc9f"
    }),
    AngularFirestoreModule
  ],
  providers: [FirebaseService, FirestoreService, AdminFirebaseService, AdminService, EmployerService, AdminFirestoreService, EmployerFirebaseService, EmployerFirestoreService, StudentService, OfertaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
