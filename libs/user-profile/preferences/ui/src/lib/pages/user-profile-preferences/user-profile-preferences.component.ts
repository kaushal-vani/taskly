import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicSettingsComponent } from '../../features/basic-settings/basic-settings.component';
import { UiPreferencesComponent } from '../../features/ui-preferences/ui-preferences.component';
import { TaskPreferencesComponent } from '../../features/task-preferences/task-preferences.component';
import { AccountSecurityComponent } from '../../features/account-security/account-security.component';
import { NotificationsComponent } from '../../features/notifications/notifications.component';
import { ProductivityComponent } from '../../features/productivity/productivity.component';

@Component({
  selector: 'lib-user-profile-preferences',
  imports: [
    CommonModule,
    BasicSettingsComponent,
    UiPreferencesComponent,
    TaskPreferencesComponent,
    AccountSecurityComponent,
    NotificationsComponent,
    ProductivityComponent,
  ],
  templateUrl: './user-profile-preferences.component.html',
  styleUrl: './user-profile-preferences.component.scss',
})
export class UserProfilePreferencesComponent {
  selectedSection = 'basic';

  sections = [
    { key: 'basic', label: 'Basic Settings', icon:'assets/settings.png' },
    { key: 'ui', label: 'UI Preferences',icon:'assets/ui-preferences.png' },
    { key: 'task', label: 'Task Management',icon:'assets/task-preferences.png' },
    { key: 'productivity', label: 'Productivity',icon:'assets/productivity.png' },
    { key: 'notifications', label: 'Notifications',icon:'assets/notifications.png' },
    { key: 'account', label: 'Account & Security',icon:'assets/account.png' },
  ];

  get activeSectionLabel(): string {
  const section = this.sections.find((s) => s.key === this.selectedSection);
  return section ? section.label : '';
}
}
