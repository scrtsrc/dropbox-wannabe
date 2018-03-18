import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule, MatTooltipModule } from '@angular/material';
import { RoutingModule } from './routing.module';
import { AlbumsModule } from './albums/albums.module';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { FileSystemModule } from './file-system/file-system.module';
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
    FileSystemModule,
    UserModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
