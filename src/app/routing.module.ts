import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsListComponent } from './albums/albums-list/albums-list.component';
import { LoginComponent } from './auth/login/login.component';
import { ProfileComponent } from './user/profile/profile.component';
import { FileSystemComponent } from './home/file-system/file-system.component';
import { AuthModule } from './auth/auth.module';

const routes: Routes = [
  {path: 'albums', component: AlbumsListComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'file-system', component: FileSystemComponent},
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
