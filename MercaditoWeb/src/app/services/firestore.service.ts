import { Injectable } from '@angular/core';
import { Estudiantes } from '../models/Estudiantes';
import { AngularFirestore, AngularFirestoreCollection, 
  AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  studentsCollection : AngularFirestoreCollection<Estudiantes>;
  students: Observable<Estudiantes[]>;

  constructor(public afs : AngularFirestore) { 
    this.studentsCollection =afs.collection<Estudiantes>('Estudiantes');
    this.students=this.studentsCollection.valueChanges();
  }
  getStudents(){
    return this.students;
  }
}

