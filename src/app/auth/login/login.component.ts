import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../shared/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'dwa-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signUpClass: string;
  signInClass: string;

  loginForm: FormGroup;
  signupForm: FormGroup;

  constructor(private authServ: AuthService,
              private fb: FormBuilder) {
    this.loginForm = fb.group({
      email: '',
      password: ''
    });
    this.signupForm = fb.group({
      email: '',
      password: '',
      password2: ''
    });
  }

  ngOnInit() {
    this.authServ.login('e@email.com', '123456')
      .then(user => console.log('logged in'))
      .catch(error => console.log(error));
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

