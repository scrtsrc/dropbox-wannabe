import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../shared/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { UserService } from '../shared/user.service';
import { Subscription } from 'rxjs/Subscription';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { FileService } from '../../shared/files/file.service';

@Component({
  selector: 'dwa-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  animations: [trigger('imageHover', [state('hoveringImage', style({opacity: 0.3})),
    state('notHoveringImage', style({opacity: 1})),
    transition('hoveringImage <=> notHoveringImage', animate('200ms ease-in'))])]
})
export class ProfileComponent implements OnInit, OnDestroy {
  profileForm: FormGroup;
  user: User;
  userSub: Subscription;
  isHovering: boolean;
  img: string;
  srcLoaded: boolean;

  constructor(private fb: FormBuilder,
              private snack: MatSnackBar,
              private userServ: UserService,
              private fileServ: FileService) {
    this.profileForm = fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      firstName: '',
      middleName: '',
      lastName: ''
    });
  }

  uploadNewImage(fileList) {
    if (fileList &&
      fileList.length === 1 &&
      ['image/jpeg', 'imge/png'].indexOf(fileList.item(0).type) > -1) {
      this.srcLoaded = false;
      const file = fileList.item(0);
      const path = 'profile-images/' + this.user.uid;
      this.fileServ.upload(path, file).downloadUrl.subscribe(url => {
        console.log(url);
        this.img = url;
        this.hovering(false);
      });
    } else {
      this.snack.open('Only a single pgn or jpeg image can be used', null, {duration: 4000});
      this.hovering(false);
    }

  }

  ngOnInit() {
    this.userSub = this.userServ.getUserWithProfileUrl().subscribe(user => {

      this.user = user;
      if (this.user.img) {
        this.img = user.profileImgUrl;
      }
      else {
        this.img = '/assets/ic_tag_faces_black_24px.svg';
      }
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

  hovering(isHovering: boolean) {
    this.isHovering = isHovering;

  }


}
