import { Injectable } from '@angular/core';
import { Estudiantes } from 'src/app/models/users/student';
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

  updateStudent(recordID,record){
    this.afs.doc('Estudiantes/' + recordID).update(record);
  }

  deleteStudent(record_id) {
    this.afs.doc('Estudiantes/' + record_id).delete();
  }
}

