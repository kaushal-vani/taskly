import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  differenceInCalendarDays,
  isToday,
  isTomorrow,
} from 'date-fns';

@Component({
  selector: 'lib-due-date-indicator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './due-date-indicator.component.html',
  styleUrl: './due-date-indicator.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DueDateIndicatorComponent implements OnChanges {
  @Input() dueDate!: Date;

  status: 'today' | 'tomorrow' | 'overdue' | 'upcoming' = 'upcoming';
  label = '';

  ngOnChanges(): void {
    const now = new Date();
    const diff = differenceInCalendarDays(this.dueDate, now);

    if (isToday(this.dueDate)) {
      this.status = 'today';
      this.label = 'Today';
    } else if (isTomorrow(this.dueDate)) {
      this.status = 'tomorrow';
      this.label = 'Tomorrow';
    } else if (diff < 0) {
      this.status = 'overdue';
      this.label = `Overdue by ${Math.abs(diff)} day${Math.abs(diff) > 1 ? 's' : ''}`;
    } else {
      this.status = 'upcoming';
      this.label = `In ${diff} day${diff > 1 ? 's' : ''}`;
    }
  }
}