import { Component, inject } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { FormControl,
         FormGroupDirective,
         NgForm,
         Validators,
         FormsModule,
         ReactiveFormsModule,
         FormBuilder,
         FormGroup, } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, DividerModule, ButtonModule, ReactiveFormsModule, MatInputModule, MatFormFieldModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor (private authService: AuthService) {}

  formBuilder = inject(FormBuilder);
  loginForm: FormGroup = this.formBuilder.group({
    email: '',
    password: ''
  });
 
  somefunc() {
    console.log(this.loginForm.value);

    // this.authService.firebaseRegister(this.registerForm.value);
  }
}
