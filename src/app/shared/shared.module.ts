import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatButtonModule, MatIconModule, MatToolbarModule } from '@angular/material';
import { MarginIconComponent } from './margin-icon/margin-icon.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UploadDirective } from './directives/upload.directive';
import { FileService } from './files/file.service';
import { AngularFireStorageModule } from 'angularfire2/storage';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    AngularFireStorageModule
  ],
  declarations: [ToolbarComponent, MarginIconComponent, UploadDirective],
  exports: [ToolbarComponent, MarginIconComponent, UploadDirective],
  providers: [FileService]
})
export class SharedModule { }
