import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
  <app-navbar></app-navbar>
  <app-home></app-home>
  `
})
export class AppComponent {
  title = 'angular-app';
}
