import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-frm-arr-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './frm-arr-form.component.html',
  styleUrl: './frm-arr-form.component.css',
})
export class FrmArrFormComponent {
  userForm: FormGroup;

  constructor() {
    this.userForm = new FormGroup({
      employee: new FormArray([
        new FormGroup({
          name: new FormControl('', [Validators.required]),
          email: new FormControl('', [Validators.required]),
        }),
      ]),
    });
  }

  get emp() {
    return this.userForm.get('employee') as FormArray;
  }

  submit() {
    console.log(this.userForm);
    console.log(this.userForm.value);
    console.log(this.userForm.valid);
  }

  addEmployee(): void {
    (this.userForm.get('employee') as FormArray).push(
      new FormGroup({
        name: new FormControl(''),
        email: new FormControl(''),
      })
    );
  }
}
