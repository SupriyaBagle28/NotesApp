import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  constructor(public af:AngularFireAuth) { 
  
  }

  loginWithGoogle(){
    return this.af.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
  }
 
  logout() {
      this.af.auth.signOut();
    }
  }
  
