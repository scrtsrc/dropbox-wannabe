import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileDetailsComponent } from './file-details/file-details.component';
import { FileSystemContainerComponent } from './file-system-container/file-system-container.component';
import { MatButtonModule, MatCardModule, MatIconModule, MatListModule, MatProgressSpinnerModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FolderDetailsComponent } from './folder-details/folder-details.component';
import { FileSystemColumnComponent } from './file-system-column/file-system-column.component';


@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  declarations: [FileDetailsComponent, FileSystemContainerComponent, FolderDetailsComponent, FileSystemColumnComponent],
  providers: [],
  exports: [FileSystemContainerComponent]
})
export class FileSystemModule {
}
