import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsListComponent } from './albums/albums-list/albums-list.component';
import { LoginComponent } from './auth/login/login.component';
import { ProfileComponent } from './user/profile/profile.component';
import { FileSystemComponent } from './file-system/file-system/file-system.component';
import { AuthModule } from './auth/auth.module';
import { AuthGuardService } from './auth/shared/auth-guard.service';
import { LoggedInGuard } from './auth/shared/logged-in.guard';
import { UserModule } from './user/user.module';

const routes: Routes = [
  {path: 'albums', component: AlbumsListComponent, canActivate: [AuthGuardService]},
  {path: 'landing', component: LoginComponent, canActivate: [LoggedInGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService]},
  {path: 'file-system', component: FileSystemComponent, canActivate: [LoggedInGuard]},
  {path: '', redirectTo: '/albums', pathMatch: 'full'},
  {path: '**', redirectTo: '/albums'},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    AuthModule,
    UserModule
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RoutingModule {
}
