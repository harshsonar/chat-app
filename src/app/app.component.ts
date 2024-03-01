import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initializeApp } from '@angular/fire/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@firebase/auth';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';


const firebaseApp = initializeApp(environment.firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, LandingPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {

  // register(form: RegisterForm) {
  //   createUserWithEmailAndPassword(firebaseAuth, form.email, form.password).then()... 
  // }
}
