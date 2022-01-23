import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  private isValidEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;


  constructor(private fb: FormBuilder) { }

  registerForm = this.fb.group({
    id: ['', Validators.required],
    firstName: ['Fernando'],
    lastName: [''],
    username: [''],
    email: ['', [Validators.required, Validators.pattern(this.isValidEmail)]],
  });
  ngOnInit(): void {
  }

  onRegister() {
    console.log(this.registerForm.value);
  }

  // getMessageError(field: string) {
  //   if (this.registerForm.get(field).errors) {
  //     return this.registerForm.get(field).hasError('required') ? 'You must enter a value' :
  //       this.registerForm.get(field).hasError('pattern') ? 'Not a valid email' : '';
  //   }
  //   return this.registerForm.get(field).hasError('required') ? 'You must enter a value' : '';
  // }

}
