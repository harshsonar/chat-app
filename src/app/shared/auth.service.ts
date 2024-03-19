import { Injectable } from '@angular/core';
import { initializeApp } from '@angular/fire/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@firebase/auth';
import { RouterService } from './router.service';
import { environment } from '../../environments/environment';
import { Login } from '../interface/login';
import { Register } from '../interface/register';


const firebaseApp = initializeApp(environment.firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: RouterService) { }

  isAuthenticated: boolean = false;

  //Register
  firebaseRegister() {
    
  }
}
