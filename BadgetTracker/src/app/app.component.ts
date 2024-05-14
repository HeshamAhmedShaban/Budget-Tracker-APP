import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/static-components/navbar/navbar.component';
import { RegisterComponent } from './features/register/register.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,NavbarComponent,RouterLink,RegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BadgetTracker';

  constructor(private router:Router) { }

  isSignInPage(): boolean {
    return this.router.url === '/register';
  }
}
