import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-status-badge',
  imports: [CommonModule],
  templateUrl: './status-badge.component.html',
  styleUrl: './status-badge.component.scss',
})
export class StatusBadgeComponent {
  @Input() status: 'todo' | 'in-progress' | 'blocked' | 'completed' = 'todo';

  get label(): string {
    const labels = {
      'todo': 'To Do',
      'in-progress': 'In Progress',
      'blocked': 'Blocked',
      'completed': 'Completed',
    };
    return labels[this.status];
  }
}
