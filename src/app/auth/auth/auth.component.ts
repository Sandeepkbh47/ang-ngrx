import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Store, StoreConfig } from '@ngrx/store';
import { AppState } from '../../app.config';
import { login } from '../state/auth.action';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  loginForm: FormGroup;
  constructor(private store: Store<AppState>) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  submitForm() {
    let email = this.loginForm.value.email;
    let password = this.loginForm.value.password;
    this.store.dispatch(login({ email, password }));
  }
}
