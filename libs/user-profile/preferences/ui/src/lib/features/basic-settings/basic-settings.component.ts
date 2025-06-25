import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '@taskly/shared';
// ... other imports

@Component({
  selector: 'lib-basic-settings',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './basic-settings.component.html',
  styleUrl: './basic-settings.component.scss',
})
export class BasicSettingsComponent implements OnInit {
  authService = inject(AuthService);

  name = '';
  email = '';

  showPasswordForm = false;
  currentPassword = '';
  newPassword = '';
  confirmPassword = '';

  ngOnInit(): void {
    const user = this.authService.getUser();
    if (user) {
      this.name = user.name;
      this.email = user.email;
    }
  }

  togglePasswordChange(): void {
    this.showPasswordForm = !this.showPasswordForm;
  }

  updatePassword(): void {
    if (!this.currentPassword || !this.newPassword || !this.confirmPassword) {
      alert('All password fields are required.');
      return;
    }

    if (this.newPassword !== this.confirmPassword) {
      alert('New password and confirm password do not match.');
      return;
    }

    this.authService.changePassword(this.currentPassword, this.newPassword).subscribe({
      next: (res) => {
        if (res.success) {
          alert('Password updated successfully.');
          this.currentPassword = '';
          this.newPassword = '';
          this.confirmPassword = '';
          this.showPasswordForm = false;
        } else {
          alert(res.message || 'Password update failed.');
        }
      },
      error: (err) => {
        alert(err.error?.message || 'Error occurred while updating password.');
      },
    });
  }
}