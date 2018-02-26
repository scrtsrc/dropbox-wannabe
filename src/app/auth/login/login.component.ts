import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dwa-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signUpClass: string;
  signInClass: string;

  constructor() {
  }

  ngOnInit() {
  }

  signUp() {
    this.signUpClass = 'active-sx';
    this.signInClass = 'inactive-dx';
  }

  signIn() {
    this.signUpClass = 'inactive-sx';
    this.signInClass = 'active-dx';
  }

}

