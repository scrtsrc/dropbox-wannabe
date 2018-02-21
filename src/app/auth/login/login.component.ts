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
   // this.signInClass = 'active-dx inactive-sx';
   //  this.signUpClass = 'active-sx inactive-dx';
  }

  // $(".log-in").click(function(){
  //   ('.signIn').addClass('active-dx');
  //   (".signUp").addClass("inactive-sx");
  //   (".signUp").removeClass("active-sx");
  //   (".signIn").removeClass("inactive-dx");
  // });
  //
  // $(".back").click(function(){
  //   $(".signUp").addClass("active-sx");
  //   $(".signIn").addClass("inactive-dx");
  //   $(".signIn").removeClass("active-dx");
  //   $(".signUp").removeClass("inactive-sx");
  // });

  signUp() {
     this.signUpClass = 'active-sx';
    this.signInClass = 'inactive-dx';
  }
  signIn() {
    this.signUpClass = 'inactive-sx';
    this.signInClass = 'active-dx';
  }
}

