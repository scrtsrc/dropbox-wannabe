import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileSystemComponent } from './file-system/file-system.component';
import { FileService } from './shared/file.service';
import { AngularFireStorageModule } from 'angularfire2/storage';

@NgModule({
  imports: [
    CommonModule,
    AngularFireStorageModule
  ],
  declarations: [FileSystemComponent],
  providers: [FileService]
})
export class FileSystemModule {
}
