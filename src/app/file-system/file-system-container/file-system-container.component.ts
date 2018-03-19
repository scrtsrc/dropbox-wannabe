import { Component, OnInit } from '@angular/core';
import { File } from '../shared/file';

@Component({
  selector: 'dwa-file-system-container',
  templateUrl: './file-system-container.component.html',
  styleUrls: ['./file-system-container.component.css']
})
export class FileSystemContainerComponent implements OnInit {

  file: File;
  url: string;

  constructor() {
    this.file = {
      displayName: 'That time at that place',
      fileName: 'Y_img.jpeg',
      created: '10-10-2018',
      mimeType: 'jpeg',
      size: 2168316
    };
    this.url = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
  }

  ngOnInit() {
  }

}
