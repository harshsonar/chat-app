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


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ DividerModule, ButtonModule, ReactiveFormsModule, MatInputModule, MatFormFieldModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  formBuilder = inject(FormBuilder);
  registerForm: FormGroup = this.formBuilder.group({
    email: '',
    password: ''
  });
 
  somefunc() {
    console.log(this.registerForm.value);
  }

}