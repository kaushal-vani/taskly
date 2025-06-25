import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Priority } from '@taskly/shared';
import { FormsModule } from '@angular/forms';

type TaskPref = 'dueDateReminders' | 'overdueAlerts' | 'dailySummaries' | 'autoArchive';

@Component({
  selector: 'lib-task-preferences',
  imports: [CommonModule,FormsModule],
  templateUrl: './task-preferences.component.html',
  styleUrl: './task-preferences.component.scss',
})
export class TaskPreferencesComponent {
  defaultPriority: Priority = 'medium';
  defaultDueTime = '17:00'; // 5:00 PM

  preferences: Record<TaskPref, boolean> = {
    dueDateReminders: true,
    overdueAlerts: true,
    dailySummaries: false,
    autoArchive: false,
  };

  preferenceKeys: TaskPref[] = Object.keys(this.preferences) as TaskPref[];

  formatLabel(key: string): string {
    return key
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, (s) => s.toUpperCase());
  }

  savePreferences() {
    console.log('Saving task preferences:', {
      priority: this.defaultPriority,
      time: this.defaultDueTime,
      toggles: this.preferences,
    });
  }
}