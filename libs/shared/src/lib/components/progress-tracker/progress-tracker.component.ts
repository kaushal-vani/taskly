import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface TimeframeProgress {
  label: 'day' | 'week' | 'month' | 'overall';
  value: number; // 0–100
}

@Component({
  selector: 'lib-progress-tracker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress-tracker.component.html',
  styleUrl: './progress-tracker.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressTrackerComponent {
  @Input() progressByTimeframe: TimeframeProgress[] = [];

  // Circle stroke calculations
  private readonly radius = 15.9155;
  private readonly circumference = 2 * Math.PI * this.radius;

  getStroke(value: number): string {
    const filled = (value / 100) * this.circumference;
    const remaining = this.circumference - filled;
    return `${filled} ${remaining}`;
  }

  getColor(value: number): string {
    if (value >= 80) return '#4caf50'; // Green
    if (value >= 50) return '#ffbb00'; // Yellow
    if (value > 25) return '#ff9800';  // Orange
    return '#f44336'; // Red
  }
}