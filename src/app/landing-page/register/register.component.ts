import { Component } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { inject } from '@angular/core';
import { FormControl,
         FormGroupDirective,
         NgForm,
         Validators,
         ReactiveFormsModule, 
         FormBuilder,
         FormGroup} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthService } from '../../shared/auth.service';
import { RouterService } from '../../shared/router.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [DividerModule, ButtonModule, ReactiveFormsModule, MatInputModule, MatFormFieldModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor (private authService: AuthService, private router: RouterService) {}

  formBuilder = inject(FormBuilder);
  errorMessage: string | null = null;

  registerForm: FormGroup = this.formBuilder.group({
    email: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
 
  onSubmit() {
    this.authService
    .firebaseRegister(this.registerForm.value)
    .then(() => {
      alert("Account Created!");
      this.errorMessage = null;
      this.registerForm.reset();
    })
    .catch((err) => {
      console.log(err);

      this.errorMessage = err.code;
      this.registerForm.reset();
    });
  }

}
