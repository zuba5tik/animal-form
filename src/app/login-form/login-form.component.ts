import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  input: string;
  login: FormGroup;
  add = false;
  emails = 'UsEr';
  constructor() {
    this.login = new FormGroup({
      email: new FormControl(''),
    });
   }

  ngOnInit() {
  }

  submit() {
    this.input = this.login.controls['email'].value;
    console.log(this.input.toLowerCase());
    const input = this.input.toLowerCase();
    const email = this.emails.toLowerCase();
    if (input === email) {
      this.add = true;
      this.login.addControl('password', new FormControl());
    }
  }

}
