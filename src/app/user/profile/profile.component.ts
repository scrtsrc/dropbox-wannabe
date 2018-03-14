import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { UserService } from '../shared/user.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'dwa-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
  profileForm: FormGroup;
  user: User;
  userSub: Subscription;

  constructor(private fb: FormBuilder,
              private snack: MatSnackBar,
              private userServ: UserService) {
    this.profileForm = fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      firstName: '',
      middleName: '',
      lastName: ''
    });
  }

  ngOnInit() {
    this.userSub = this.userServ.getUser().subscribe(user => {
      this.user = user;
      this.profileForm.patchValue(user);
    });
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  unchanged(): boolean {
    const model = this.profileForm.value as User;
    return model.username === this.user.username &&
      model.firstName === this.user.firstName &&
      model.middleName === this.user.middleName &&
      model.lastName === this.user.lastName;
  }

  save() {
    const model = this.profileForm.value as User;
    model.uid = this.user.uid;
    this.userServ.update(model)
      .then(() => console.log('saved'))
      .catch(err => console.log(err));
  }

  fcErr(fc: string, ec: string, pre?: string[]): boolean {
    if (pre && pre.length > 0) {
      for (let i = 0; i < pre.length; i++) {
        if (this.profileForm.get(fc).hasError(pre[i])) {
          return false;
        }
      }
    }
    return this.profileForm.get(fc).hasError(ec);
  }


}
