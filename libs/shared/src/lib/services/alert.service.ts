import { Injectable } from '@angular/core';
import { CustomAlertComponent } from '@taskly/alert-ui';

@Injectable({ providedIn: 'root' })
export class AlertService {
  private alertComponent!: CustomAlertComponent;

  register(component: CustomAlertComponent) {
    this.alertComponent = component;
  }

  show(message: string, type: 'success' | 'error' | 'info' = 'info') {
    this.alertComponent?.show(message, type);
  }
}