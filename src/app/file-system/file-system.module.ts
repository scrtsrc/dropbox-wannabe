import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileDetailsComponent } from './file-details/file-details.component';
import { FileSystemContainerComponent } from './file-system-container/file-system-container.component';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [FileDetailsComponent, FileSystemContainerComponent],
  providers: [],
  exports: [FileSystemContainerComponent]
})
export class FileSystemModule {
}
