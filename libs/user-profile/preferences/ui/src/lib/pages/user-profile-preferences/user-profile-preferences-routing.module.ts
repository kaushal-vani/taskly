import { Routes } from '@angular/router';
import { UserProfilePreferencesComponent } from './user-profile-preferences.component';

export const routes: Routes = [
  {
    path: '',
    component: UserProfilePreferencesComponent,
    children: [
      {
        path: 'basic',
        loadComponent: () =>
          import('../../features/basic-settings/basic-settings.component').then(
            (m) => m.BasicSettingsComponent 
          ),
      },
      {
        path: 'ui',
        loadComponent: () =>
          import('../../features/ui-preferences/ui-preferences.component').then(
            (m) => m.UiPreferencesComponent
          ),
      },
      {
        path: 'task',
        loadComponent: () =>
          import('../../features/task-preferences/task-preferences.component').then(
            (m) => m.TaskPreferencesComponent
          ),
      },
      {
        path: 'productivity',
        loadComponent: () =>
          import('../../features/productivity/productivity.component').then(
            (m) => m.ProductivityComponent
          ),
      },
      {
        path: 'notifications',
        loadComponent: () =>
          import('../../features/notifications/notifications.component').then(
            (m) => m.NotificationsComponent
          ),
      },
      {
        path: 'account',
        loadComponent: () =>
          import('../../features/account-security/account-security.component').then(
            (m) => m.AccountSecurityComponent
          ),
      },
      { path: '', redirectTo: 'basic', pathMatch: 'full' }
    ],
  },
];