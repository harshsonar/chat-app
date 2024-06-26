import { Injectable, inject, signal } from '@angular/core';
import { initializeApp } from '@angular/fire/app';
import { Auth, user, signOut } from '@angular/fire/auth';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from '@firebase/auth';
import { RouterService } from './router.service';
import { UserInterface } from '../interface/user';



@Injectable({
  providedIn: 'root'
})

export class AuthService {
  
  constructor(private router: RouterService, private auth: Auth) { }
  
  firebaseAuth = inject(Auth);
  userdata$ = user(this.firebaseAuth);
  // contains all user data. "$" signifies its an observable. It does not have any function of its own but is a convention.

  currentUserSig = signal<UserInterface | null | undefined>(undefined);
  // Can have <> 3 values, undefined by default.
  // We nee undefined because we want to avoid any unusual circumstance.
  


  //Register
  firebaseRegister(registerForm: any) {
    const promise = createUserWithEmailAndPassword(this.firebaseAuth, registerForm.email, registerForm.password)
    .then(  
      (res) => updateProfile(
        res.user,
        { displayName: registerForm.username }
      ),
    );
    //updateProfile() is for updating username as createUserWithEmailAndPassword() does not contain param to add username
    
    return promise;
  }

  //Login
  firebaseLogin(loginForm: any) {
    const promise = signInWithEmailAndPassword(this.firebaseAuth, loginForm.email, loginForm.password);
    console.log(promise);
    
    return promise;
  }

  //Logout
  firebaseLogout() {
    const promise = signOut(this.firebaseAuth);
    return promise;
  }
}
