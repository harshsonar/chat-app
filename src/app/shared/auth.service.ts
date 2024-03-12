import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { initializeApp } from '@angular/fire/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@firebase/auth';
import { RouterService } from './router.service';
import { environment } from '../../environments/environment';


const firebaseApp = initializeApp(environment.firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth: AngularFireAuth, private router: RouterService) { }

  //Login
  fireLogin(email: string, password: string) {
    this.fireAuth.signInWithEmailAndPassword(email, password).then( () => {
      localStorage.setItem('token', 'true');
    })
  }
}
