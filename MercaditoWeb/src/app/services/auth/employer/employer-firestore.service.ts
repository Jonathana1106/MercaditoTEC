import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, 
  AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';
import {Employer} from 'src/app/models/users/employer';

@Injectable({
  providedIn: 'root'
})
export class EmployerFirestoreService {
  employersCollection : AngularFirestoreCollection<Employer>;
  employers: Observable<Employer[]>;

  constructor(public afs : AngularFirestore) { 
    this.employersCollection =afs.collection<Employer>('Empleadores');
    this.employers=this.employersCollection.valueChanges();
  }
  getEmployers(){
    return this.employers;
  }
}
