import { Injectable } from '@angular/core';
import { User } from '../user';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../auth/shared/auth.service';
import { AngularFirestore } from 'angularfire2/firestore';
import 'rxjs/add/operator/first';
import { EmptyObservable } from 'rxjs/observable/EmptyObservable';

@Injectable()
export class UserService {

  constructor(private authServ: AuthService,
              private  afs: AngularFirestore) {
  }

  getUser(): Observable<User> {
    /* Get the authuser
       Get the DBuser- _switchmap
       Merge both - map
    */
    return this.authServ.getAuthUser()
      .switchMap(authUser => {
        if (!authUser) {
          return new EmptyObservable();
        }
        return this.afs.doc<User>('users/' + authUser.uid).valueChanges()
          .map(dbUser => {
            if (dbUser) {
              authUser.username = dbUser.username;
              authUser.firstName = dbUser.firstName;
              authUser.middleName = dbUser.middleName;
              authUser.lastName = dbUser.lastName;
            }

            return authUser;
          });
      });
  }

  update(user: User): Promise<any> {
    return this.afs.doc('users/' + user.uid).set(user);
  }
}
