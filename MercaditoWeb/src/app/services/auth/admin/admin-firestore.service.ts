import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, 
  AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';
import {Admin} from 'src/app/models/users/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminFirestoreService {
  adminCollection : AngularFirestoreCollection<Admin>;
  admins: Observable<Admin[]>;

  constructor(public afs : AngularFirestore) { 
    this.adminCollection =afs.collection<Admin>('Administradores');
    this.admins=this.adminCollection.valueChanges();
  }
  getAdmins(){
    return this.admins;
  }

  updateAdmins(recordID,record){
    this.afs.doc('Administradores/' + recordID).update(record);
  }

  deleteAdmins(record_id) {
    this.afs.doc('Administradores/' + record_id).delete();
  }
}
