import { Injectable, inject } from '@angular/core';
import { initializeApp } from '@angular/fire/app';
import { Auth } from '@angular/fire/auth';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from '@firebase/auth';
import { RouterService } from './router.service';
import { Observable, from } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class AuthService {
  
  constructor(private router: RouterService, private auth: Auth) { }
  
  isAuthenticated: boolean = false;
  firebaseAuth = inject(Auth);

  //Register
  firebaseRegister(registerForm: any) : Observable<void> {
    const promise = createUserWithEmailAndPassword(this.firebaseAuth, registerForm.email, registerForm.password)
    .then(
      (response) => updateProfile(
        response.user,
        { displayName: registerForm.username }
      ),
    );
    
    //trying to convert promise to observable
    return from(promise);
  }

  // //Login
  firebaseLogin() {

  }
}
