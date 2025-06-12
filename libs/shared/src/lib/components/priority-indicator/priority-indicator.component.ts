import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-priority-indicator',
  imports: [CommonModule],
  templateUrl: './priority-indicator.component.html',
  styleUrl: './priority-indicator.component.scss',
})
export class PriorityIndicatorComponent {
   @Input() level: 'low' | 'medium' | 'high' | 'very-high' = 'low';
   get priorityCount(): number {
    return {
      'low': 1,
      'medium': 2,
      'high': 3,
      'very-high': 4
    }[this.level];
  }

  get priorityColor(): string {
    return {
      'low': '#00C853',
      'medium': '#FFBB00',
      'high': '#FF6D00',
      'very-high': '#D50000'
    }[this.level];
  }

  get circles(): number[] {
    return Array(this.priorityCount).fill(0);
  }
}
