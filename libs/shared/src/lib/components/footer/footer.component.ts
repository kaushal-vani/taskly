import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services';

@Component({
  selector: 'lib-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements OnInit {
  authService = inject(AuthService);
  isLoggedIn = false;

  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe((status) => {
      this.isLoggedIn = status;
    });

    // Ensure login state is set on page load/refresh
    if (this.authService.isAuthenticated()) {
      this.isLoggedIn = true;
    }
  }
}