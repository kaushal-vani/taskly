import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services';

@Component({
  selector: 'lib-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  authService = inject(AuthService);
  isLoggedIn = false;

  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe((status) => {
      this.isLoggedIn = status;
    });

    // If the page is refreshed, initialize login state
    if (this.authService.isAuthenticated()) {
      this.isLoggedIn = true;
    }
  }

  onLogout(): void {
    this.authService.logOut();
    this.isLoggedIn = false;
  }
}