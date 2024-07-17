import { Component, DoCheck } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-frm-build-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './frm-build-form.component.html',
  styleUrl: './frm-build-form.component.css',
})
export class FrmBuildFormComponent {
  userForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          this.patternValidation('^[a-z]+$', 'Invalid Pattern'),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      isWorking: [true, []],
      hobbie: ['', []],
    });
  }
  // ngDoCheck(): void {
  //   throw new Error('Method not implemented.');
  // }

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
