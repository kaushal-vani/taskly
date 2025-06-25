import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  authService = inject(AuthService);
  isLoggedIn = false;
  private router = inject(Router);

  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe((status) => {
      this.isLoggedIn = status;
    });

    // If the page is refreshed, initialize login state
    if (this.authService.isAuthenticated()) {
      this.isLoggedIn = true;
    }
  }

  onAddTask(): void {
    this.router.navigate(['/create-task']);
  }

  onTimer(): void {
    this.router.navigate(['/timer']);
  }

  onLogout(): void {
    this.authService.logOut();
    this.isLoggedIn = false;
  }
}