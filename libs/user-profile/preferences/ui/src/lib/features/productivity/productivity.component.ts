import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertService, ProductivityPreferencesService } from '@taskly/shared';

@Component({
  selector: 'lib-productivity',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './productivity.component.html',
  styleUrl: './productivity.component.scss',
})
export class ProductivityComponent {
  alertService = inject(AlertService);
  productivityPreferencesService = inject(ProductivityPreferencesService);
  focusModeEnabled = this.productivityPreferencesService.focusModeEnabled;
  workInterval = this.productivityPreferencesService.workInterval;
  shortBreak = this.productivityPreferencesService.shortBreak;
  longBreak = this.productivityPreferencesService.longBreak;

  onFocusModeToggle() {
    console.log('Focus mode toggled:', this.focusModeEnabled);
    // Optional: Save to localStorage or notify parent
  }

  savePreferences() {
    this.productivityPreferencesService.setPreferences({
      focusModeEnabled: this.focusModeEnabled,
      workInterval: this.workInterval,
      shortBreak: this.shortBreak,
      longBreak: this.longBreak,
    });
    this.alertService.show('Productivity preferences saved!', 'success');
  }
}
