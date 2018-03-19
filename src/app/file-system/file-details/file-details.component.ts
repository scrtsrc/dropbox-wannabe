import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { File } from '../shared/file';

@Component({
  selector: 'dwa-file-details',
  templateUrl: './file-details.component.html',
  styleUrls: ['./file-details.component.css']
})
export class FileDetailsComponent implements OnInit {

  @Input()
  file: File;
  @Input()
  url: string;
  @Output()
  imageDeleted = new EventEmitter<string>();
  srcLoaded: boolean;

  constructor() {

  }

  ngOnInit() {

  }

  delete() {
    this.imageDeleted.emit(this.url);
  }

}
