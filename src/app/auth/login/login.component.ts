import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { matchPasswordValidator } from '../shared/password.validator';
import { User } from '../../user/user';


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
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.min(6)]]
    });
    this.signupForm = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.min(6)]],
      password2: ['', [Validators.required, matchPasswordValidator()]]
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
    const signUpUserModel = this.signupForm.value as User;
    this.authServ.signUp(signUpUserModel)
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

  // fg 1 = signUpForm
  // default fg = signInForm
  fcErr(fg: number, fc: string, ec: string, pre?: string[]): boolean {
    let currentFG: FormGroup;

    switch (fg) {
      case 1:
        currentFG = this.signupForm;
        break;
      default:
        currentFG = this.loginForm;
    }
    if (pre && pre.length > 0) {
      for (let i = 0; i < pre.length; i++) {
        if (currentFG.get(fc).hasError(pre[i])) {
          return false;
        }
      }
    }
    return currentFG.get(fc).hasError(ec);
  }

}

