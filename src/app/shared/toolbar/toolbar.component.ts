import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Output()
  navToggle = new EventEmitter();
  constructor() {
  }

  ngOnInit() {
  }

  toggleNav() {
    this.navToggle.emit();
  }
}
