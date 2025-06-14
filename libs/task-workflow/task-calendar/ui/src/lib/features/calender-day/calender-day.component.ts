import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../calender/calender.component';

@Component({
  selector: 'lib-calender-day',
  imports: [CommonModule],
  templateUrl: './calender-day.component.html',
  styleUrl: './calender-day.component.scss',
})
export class CalenderDayComponent {
  @Input() selectedDate!: Date;
  @Input() tasksForDate: Task[] = [];
}