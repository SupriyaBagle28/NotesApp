import { INotes } from './../Files/Notes';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from '@firebase/app';

@Injectable({
  providedIn: 'root'
})

export class NotesService {

  data : AngularFireList<INotes[]> = null;
  userId : string;
  note:AngularFireList<INotes>;

  constructor(private db: AngularFireDatabase, private afAuth:AngularFireAuth) { 
    // this.afAuth.authState.subscribe(user=>{
    //   if(user)this.userId=user.uid
    // })
  }

  // getNotes(): AngularFireList<INotes[]> {
  //    if(!this.userId) return;
  //    this.data= this.db.list(`data/${this.userId}`);
  //    return this.data;
  // }

  getNotes(): Observable<any> {
    return this.db.list('/data').valueChanges();
 }

 

  addNotes(note) {
    return this.db.list('/data').push(note);
  }

 
}
