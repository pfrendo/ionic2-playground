import { Component, ViewChild } from '@angular/core';
import { Nav } from 'ionic-angular';

import { TabsPage } from './pages/tabs/tabs';
import { HomePage } from './pages/home/home';
import { AboutPage } from './pages/about/about';
import { RouterService, RouteModel } from "./shared/index";

@Component({
  moduleId: module.id,
  templateUrl: 'app.html'
})
export class MyApp {

  private rootPage: any;
  private routes: RouteModel[] = [{
    component: HomePage,
    path: '#/home'
  }, {
    component: AboutPage,
    path: '#/about'

  }];
  @ViewChild('myNav') nav: Nav;

  constructor(
    private routerService: RouterService
  ) {
    // this.rootPage = HomePage;
    this.rootPage = TabsPage;

    routerService.mapRoutes(this.routes);
    routerService.initialize();

    // platform.ready().then(() => {
    //   // Okay, so the platform is ready and our plugins are available.
    //   // Here you can do any higher level native things you might need.
    //   StatusBar.styleDefault();
    // });
  }
}







