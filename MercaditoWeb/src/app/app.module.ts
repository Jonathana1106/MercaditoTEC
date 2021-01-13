//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from '@angular/fire'; 
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';
 
import { AppComponent } from './app.component';
import {FirebaseService  } from './services/firebase.service';
import { HomeComponent } from './Components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

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
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
