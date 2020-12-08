import {Injectable} from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore'
import {from} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AllService {
  data: AngularFirestoreCollection;

  constructor(public fireserve: AngularFirestore) {}

  getNote() {
    return this.fireserve.collection('data').snapshotChanges();
  }

  createNote(record) {
    return this.fireserve.collection('data').add(record);

  }
  deleteNote(record_id) {
    this.fireserve.doc('data/' + record_id).delete();
  }

  updateNote(id,record) {
    this.fireserve.doc('data/' + id).update(record)
  }

  getReaminder() {
    return this.fireserve.collection('remainder').snapshotChanges();
  }

  createRemainder(record) {
    return this.fireserve.collection('remainder').add(record);

  }
  deleteRemainder(record_id) {
    this.fireserve.doc('remainder/' + record_id).delete();
  }

  updateRemainder(id,record) {
    this.fireserve.doc('remainder/' + id).update(record)
  }

  getArchives() {
    return this.fireserve.collection('archives').snapshotChanges();
  }

  createArchives(record) {
    return this.fireserve.collection('archives').add(record);

  }
  deleteArchives(record_id) {
    this.fireserve.doc('archives/' + record_id).delete();
  }

  updateArchive(id,record) {
    this.fireserve.doc('archives/' + id).update(record)
  }

  getTrashes() {
    return this.fireserve.collection('trashes').snapshotChanges();
  }

  createTrash(record) {
    return this.fireserve.collection('trashes').add(record);

  }
  deletetrash(record_id) {
    this.fireserve.doc('trashes/' + record_id).delete();
  }

  updatetrash(id,record) {
    this.fireserve.doc('trashes/' + id).update(record)
  }

  getemployee() {
    return this.fireserve.collection('employee').snapshotChanges();
  }

  createemployee(record) {
    return this.fireserve.collection('employee').add(record);

  }
  deleteemployee(record_id) {
    this.fireserve.doc('employee/' + record_id).delete();
  }

  updateemployee(id,record) {
    this.fireserve.doc('employee/' + id).update(record)
  }
  getedetails() {
    return this.fireserve.collection('details').snapshotChanges();
  }

  createdetails(record) {
    return this.fireserve.collection('details').add(record);

  }
  deletedetails(record_id) {
    this.fireserve.doc('details/' + record_id).delete();
  }

  updatedetails(id,record) {
    this.fireserve.doc('details/' + id).update(record)
  }
  getcoustomer() {
    return this.fireserve.collection('coustomer').snapshotChanges();

  }
  createcoustomer(record) {
    return this.fireserve.collection('coustomer').add(record);

  }
  deletecoustomer(record_id) {
    this.fireserve.doc('coustomer/' + record_id).delete();
  }
}








