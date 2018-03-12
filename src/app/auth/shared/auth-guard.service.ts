import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private authServ: AuthService,
              private router: Router) {
  }

  canActivate() {
    return this.authServ.isAuthenticated()
      .map(isLoggedin => {
        if (!isLoggedin) {
          this.router.navigateByUrl('landing');
        }
        return isLoggedin;
      });
  }

}
