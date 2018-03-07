import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../../auth/shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'dwa-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  isLoggedIn: boolean;

  @Output()
  navToggle = new EventEmitter();

  constructor(private authServ: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    this.authServ.isAuthenticated().subscribe(isLogged => {
        this.isLoggedIn = isLogged;
      }
    );
  }

  toggleNav() {
    this.navToggle.emit();
  }

  logout() {
    this.authServ.logout().then(() => {
      this.router.navigateByUrl('/login');
    });
  }
}
