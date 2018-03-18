import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatProgressSpinner, MatProgressSpinnerModule,
  MatSnackBarModule,
  MatTooltipModule
} from '@angular/material';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { UserService } from './shared/user.service';
import * as firebase from 'firebase/app';
import Firestore = firebase.firestore.Firestore;
import { FileSystemModule } from '../file-system/file-system.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    RouterModule,
    MatIconModule,
    AngularFirestoreModule,
    SharedModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    FileSystemModule,
    MatProgressSpinnerModule
  ],
  declarations: [ProfileComponent],
  providers: [UserService],
})
export class UserModule {
}
