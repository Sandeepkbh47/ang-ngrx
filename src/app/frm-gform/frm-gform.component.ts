import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-frm-gform',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './frm-gform.component.html',
  styleUrl: './frm-gform.component.css',
})
export class FrmGFormComponent {
  userForm: FormGroup;
  constructor() {
    this.userForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        this.patternValidation('^[a-z]+$', 'Invalid Pattern'),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  submit() {
    console.log(this.userForm);
    console.log(this.userForm.value);
  }

  patternValidation(pattern: string, message: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const fn = Validators.pattern(pattern);
      const result = fn(control);
      console.log(result);
      if (result == null) return null;
      return { invalidPattern: message };
    };
  }

  emailErrors() {
    if (this.userForm.get('email')?.touched) {
      const errors = this.userForm.get('email')?.errors;
      if (errors?.['required']) {
        return 'Email is required';
      } else if (errors?.['email']) {
        return 'Email is not valid';
      }
    }
    return null;
  }
}
