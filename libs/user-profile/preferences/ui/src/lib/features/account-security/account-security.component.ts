import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-account-security',
  imports: [CommonModule],
  templateUrl: './account-security.component.html',
  styleUrl: './account-security.component.scss',
})
export class AccountSecurityComponent {

confirmDelete() {
  const confirmed = confirm("Are you sure you want to permanently delete your account?");
  if (confirmed) {
    // Call your API or service method
    console.log("Account deletion confirmed");
  }
}

confirmDeactivate() {
  const confirmed = confirm("Are you sure you want to deactivate your account?");
  if (confirmed) {
    // Call your API or service method
    console.log("Account deactivation confirmed");
  }
}

}
