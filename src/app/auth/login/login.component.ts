import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../shared/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

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

  //errorLogin = false;

  constructor(private authServ: AuthService,
              private fb: FormBuilder,
              private snack: MatSnackBar,
              private router: Router) {
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
    // this.authServ.login('e@email.com', '123456')
    //   .then(user => console.log('logged in'))
    //   .catch(error => console.log(error));
  }

  changeToSignUp() {
    this.signUpClass = 'active-sx';
    this.signInClass = 'inactive-dx';
  }

  changeToSignIn() {
    this.signUpClass = 'inactive-sx';
    this.signInClass = 'active-dx';
  }

  signIn() {
    const signInModel = this.loginForm.value;
    this.authServ.login(signInModel.email, signInModel.password)
      .then(() => {
        this.router.navigateByUrl('albums')
          .then(() =>
            this.snack.open('Logged in successfully', '', {
              duration: 4000
            }));
      })
      .catch(error => {
        //this.errorLogin = true;
        this.snack.open(error.message, '', {
          duration: 4000
        });
      });
  }

  signUp() {
    const signUpModel = this.signupForm.value;
    this.authServ.signUp(signUpModel.email, signUpModel.password)
      .then(() => {
        this.router.navigateByUrl('albums')
          .then(() =>
            this.snack.open('You are signed up!', '', {
              duration: 4000
            }));
      })
      .catch(error => {
        //this.errorLogin = true;
        this.snack.open(error.message, '', {
          duration: 4000
        });
      });
  }

}

