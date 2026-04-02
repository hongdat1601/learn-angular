import { Component } from '@angular/core';
import { HeaderComponent } from "./header-component/header-component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {}
