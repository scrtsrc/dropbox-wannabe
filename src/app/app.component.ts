import { Component } from '@angular/core';

@Component({
  selector: 'dwa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navbarOpen = true;
  routes = [
    {route: '/', title: 'Home', icon: 'home'},
    {route: '/albums', title: 'Albums', icon: 'folder'}
  ];

  toggleNav() {
    this.navbarOpen = !this.navbarOpen;
  }

}
