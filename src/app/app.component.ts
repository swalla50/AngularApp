import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
  <app-navbar></app-navbar>

  <router-outlet></router-outlet>
  <app-homeinfo></app-homeinfo>

  <app-footer></app-footer>
  `
})
export class AppComponent {
  title = 'angular-app';
}
