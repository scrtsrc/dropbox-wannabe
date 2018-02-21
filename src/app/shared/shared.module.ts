import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatButtonModule, MatIconModule, MatToolbarModule } from '@angular/material';
import { MarginIconComponent } from './margin-icon/margin-icon.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [ToolbarComponent, MarginIconComponent],
  exports: [ToolbarComponent, MarginIconComponent]
})
export class SharedModule { }
