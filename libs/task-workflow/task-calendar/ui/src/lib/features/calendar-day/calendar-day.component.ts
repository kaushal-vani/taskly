import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '@taskly/shared';

@Component({
  selector: 'lib-calender-day',
  imports: [CommonModule],
  templateUrl: './calendar-day.component.html',
  styleUrl: './calendar-day.component.scss',
})
export class CalendarDayComponent {
  @Input() selectedDate!: Date;
  @Input() tasksForDate: Task[] = [];
}