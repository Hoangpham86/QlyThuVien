import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-borrow-pages',
  templateUrl: './borrow-pages.component.html',
  styleUrls: ['./borrow-pages.component.css']
})
export class BorrowPagesComponent {
  status = false;
  myEmail: string = '';
  myPass: string = '';
  constructor(private router: Router, private buider: FormBuilder) { }
  email = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    // Validators.pattern( /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/)
  ]);
  fullname = new FormControl('', [
    Validators.required,
  ]);

  cccdNumber = new FormControl('', [
    Validators.required,
  ]);

  phoneNumber = new FormControl('', [
    Validators.required,
  ]);
  BorrowForm = this.buider.group({

    fullname: this.fullname,
    cccdNumber: this.cccdNumber,
    phoneNumber: this.phoneNumber,
    password: this.password,
    email: this.email

  })
  addToggle() {
    this.status = !this.status;
  }
  Borrow(): void {
    this.myEmail = this.email.value!;
    this.myPass = this.password.value!;
    // this.authLoginService.logon(this.myEmail, this.myPass);
  }
}
