import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'dwa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  navbarOpen = true;
  routesSet = false;
  mode = 'side';
  watcher: Subscription;

  routes = [];

  constructor(private router: Router, media: ObservableMedia) {
    this.addingRoutes();
    this.watcher = media.subscribe((change: MediaChange) => {
      if (change.mqAlias === 'xs') {
        this.loadMobileContent();
      } else {
        this.loadDashboardContent();
      }
    });
  }

  loadMobileContent() {
    this.navbarOpen = false;
    this.mode = 'over';
  }

  loadDashboardContent() {
    this.navbarOpen = true;
    this.mode = 'side';
  }

  ngOnDestroy() {
    this.watcher.unsubscribe();
  }

  toggleNav() {
    this.navbarOpen = !this.navbarOpen;
  }

  addingRoutes() {
    for (let i = 0; i < this.router.config.length; i++) {
      const route: any = {path: this.router.config[i].path};
      switch (i) {
        case 0:
          route.title = 'Albums';
          route.icon = 'folder';
          break;
        case 1:
          route.title = 'Login';
          route.icon = 'https';
          break;
        case 2:
          route.title = 'Profile';
          route.icon = 'face';
          break;
        default:
          route.title = 'Home';
          route.icon = 'home';
      }
      this.routes.push(route);

    }
    this.routesSet = true;
  }

}
