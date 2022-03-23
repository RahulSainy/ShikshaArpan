import { Injectable } from '@angular/core';
import { GoogleAuthProvider,FacebookAuthProvider  } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    public afAuth: AngularFireAuth // Inject Firebase auth service
  ) {}
  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new GoogleAuthProvider());
  }
  //sign in with Facebook
  FacebookAuth() {
    return this.AuthLogin(new FacebookAuthProvider());
  }
  // Auth logic to run auth providers
  AuthLogin(provider: firebase.auth.AuthProvider) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        console.log('You have been successfully logged in!');
      })
      .catch((error) => {
        console.log(error);
      });
  }
}