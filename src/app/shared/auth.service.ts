import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { RouterService } from './router.service';

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
