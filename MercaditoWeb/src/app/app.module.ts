//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignUpComponent,
    NavComponent,
    SignInComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
  providers: [FirebaseService, FirestoreService,AdminFirebaseService,AdminFirestoreService,EmployerFirebaseService,EmployerFirestoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
