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
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

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
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
