import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-custom-alert',
  imports: [CommonModule],
  templateUrl: './custom-alert.component.html',
  styleUrl: './custom-alert.component.scss',
})
export class CustomAlertComponent {
  visible = false;
  message = '';
  type: 'success' | 'error' | 'info' = 'info';

  show(message: string, type: 'success' | 'error' | 'info' = 'info') {
    this.message = message;
    this.type = type;
    this.visible = true;

    setTimeout(() => this.visible = false, 3000); // auto-dismiss after 3s
  }

  getIcon() {
    switch (this.type) {
      case 'success': return 'assets/alert_success.png';
      case 'error': return 'assets/alert_error.png';
      case 'info':
      default: return 'assets/alert_info.png';
    }
  }
}