import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../auth/shared/auth.service';
import { AngularFirestore } from 'angularfire2/firestore';
import 'rxjs/add/operator/first';
import { EmptyObservable } from 'rxjs/observable/EmptyObservable';
import { FileService } from '../../shared/files/file.service';

@Injectable()
export class UserService {

  constructor(private authServ: AuthService,
              private  afs: AngularFirestore,
              private fileServe: FileService) {
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
              authUser.img = dbUser.img;
            }

            return authUser;
          });
      });
  }

  getUserWithProfileUrl(): Observable<User> {
    return this.getUser()
      .switchMap(user => {
        if (!user || !user.img) {
          return Observable.create(obs => obs.next(user));
        }
        return this.fileServe.downloadUrlProfile(user.uid)
          .map(url => {
            user.profileImgUrl = url;
            return user;
          });
      })
      ;
  }

  update(user: User): Promise<any> {
    return this.afs.doc('users/' + user.uid).set(user);
  }
}
