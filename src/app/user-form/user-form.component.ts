import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css',
})
export class UserFormComponent {
  @ViewChild('userForm') userForm?: NgForm;
  user: { name: string; email: string } = { name: '', email: '' };

  submit(myForm: NgForm) {
    console.log(myForm);
    console.log(myForm.valid);
    console.log(myForm.value);
  }

  checkControl(control: any) {
    // console.log(control);
    // if (control.control.value.length < 5) {
    //   control.control.setErrors({ error: 'Minimum Length Required' });
    // } else {
    //   control.control.setErrors(null);
    // }
  }
  checkName(control: any) {
    console.log(control);
  }
}
