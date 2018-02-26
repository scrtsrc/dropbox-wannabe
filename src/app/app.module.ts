import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { RoutingModule } from './routing.module';
import { AlbumsModule } from './albums/albums.module';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { MarginIconComponent } from './shared/margin-icon/margin-icon.component';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { UserModule } from './user/user.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    AlbumsModule,
    SharedModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AuthModule,
    HomeModule,
    UserModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
