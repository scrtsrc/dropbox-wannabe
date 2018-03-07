import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsListComponent } from './albums/albums-list/albums-list.component';
import { LoginComponent } from './auth/login/login.component';
import { ProfileComponent } from './user/profile/profile.component';
import { FileSystemComponent } from './home/file-system/file-system.component';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './auth/shared/auth-guard.service';

const routes: Routes = [
  {path: 'albums', component: AlbumsListComponent, canActivate: [AuthGuard]},
  {path: 'landing', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'file-system', component: FileSystemComponent},
  {path: '', redirectTo: '/landing', pathMatch: 'full'},
  {path: '**', redirectTo: '/landing'},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    AuthModule
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RoutingModule {
}
