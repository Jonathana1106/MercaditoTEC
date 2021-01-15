import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AdminFirebaseService {
  
  isLoggedIn=false
  constructor(public firebaseAuth: AngularFireAuth) { }
  
  async adminSignin(email:string, password: string){
    await  this.firebaseAuth.signInWithEmailAndPassword(email,password)
    .then(res=>{
      this.isLoggedIn = true
      localStorage.setItem('user', JSON.stringify(res.user))
    })
  }

  async adminSignup(email:string, password: string){
    await  this.firebaseAuth.createUserWithEmailAndPassword(email,password)
    .then(res=>{
      this.isLoggedIn = true
      localStorage.setItem('user', JSON.stringify(res.user))
    })
  }

  adminLogout(){
    this.firebaseAuth.signOut()
    localStorage.removeItem('user')
  }
}

