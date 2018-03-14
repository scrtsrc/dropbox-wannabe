import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { User } from '../../user/user';

@Injectable()
export class AuthService {

  constructor(private fireAuth: AngularFireAuth) {


  }

  login(email: string, password: string): Promise<any> {
    return this.fireAuth.auth.signInAndRetrieveDataWithEmailAndPassword(email, password);
  }

  signUp(user: User): Promise<any> {
    return this.fireAuth.auth.createUserAndRetrieveDataWithEmailAndPassword(
      user.email,
      user.password
    );
  }

  logout(): Promise<any> {
    return this.fireAuth.auth.signOut();
  }

  isAuthenticated(): Observable<boolean> {
    return this.fireAuth.authState
      .map(authState => {
        return authState != null;
      });
  }

  getAuthUser(): Observable<User> {
    return this.fireAuth.authState.map(authstate => {
      if (!authstate) {
        return null;
      }
      return {email: authstate.email, uid: authstate.uid};
    });
  }

}
