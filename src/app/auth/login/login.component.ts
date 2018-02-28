import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'dwa-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signUpClass: string;
  signInClass: string;

  constructor(private authServ: AuthService) {
  }

  ngOnInit() {
    this.authServ.login('e@email.com', '123456')
      .then(user => console.log(user))
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

