import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Alert } from '@taskly/shared';


@Component({
  selector: 'lib-notifications',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss',
})
export class NotificationsComponent {
  inAppEnabled = true;

  alertKeys: Alert[] = ['dueDate', 'overdue', 'assigned'];

  alerts: Record<Alert, boolean> = {
    dueDate: true,
    overdue: true,
    assigned: false,
  };

  frequency = 'instant';

  soundOptions = [
    { label: 'Chime', value: 'notification_chime.mp3' },
    { label: 'Pop', value: 'notification_pop.mp3' },
    { label: 'Ding', value: 'notification_ding.mp3' },
  ];

  selectedSound = 'notification_chime.mp3';
  playing: string | null = null;

  toggleAlert(alert: Alert) {
    this.alerts[alert] = !this.alerts[alert];
  }

  playSound(file: string) {
    const audio = new Audio(`assets/sounds/${file}`);
    this.playing = file;
    audio.play()
      .then(() => {
        audio.onended = () => {
          this.playing = null;
        };
      })
      .catch(err => {
        console.error('Sound playback failed:', err);
        this.playing = null;
      });
  }

  formatLabel(key: string): string {
    return key
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, (s) => s.toUpperCase());
  }
}