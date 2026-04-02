import { Component } from '@angular/core';
import { HeaderComponent } from './header-component/header-component';
import { UserComponent } from './user-component/user-component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {}
