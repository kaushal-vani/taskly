import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalenderComponent } from '../../features/calendar/calendar.component';
import { CalendarDayComponent } from '../../features/calendar-day/calendar-day.component';
import {
  ProgressTrackerComponent,
  Task,
  TimeframeProgress,
} from '@taskly/shared';

@Component({
  selector: 'lib-calendar-page',
  imports: [
    CommonModule,
    CalenderComponent,
    CalendarDayComponent,
    ProgressTrackerComponent,
  ],
  templateUrl: './calendar-page.component.html',
  styleUrl: './calendar-page.component.scss',
})
export class CalendarPageComponent implements OnInit {
  selectedDate: Date | null = null;
  selectedTasks: Task[] = [];

  progressByTimeframe: TimeframeProgress[] = [];

  ngOnInit(): void {
    this.selectedDate = new Date();
  }

  onDateSelected(date: Date) {
    this.selectedDate = date;
  }

  onTasksForDateSelected(tasks: Task[]) {
    this.selectedTasks = tasks;
    console.log(this.selectedTasks)
    this.calculateProgress(tasks);
  }

  calculateProgress(tasks: Task[]) {
  if (!tasks || tasks.length === 0) {
    this.progressByTimeframe = [{ label: 'day', value: 0 }];
    return;
  }

  const completedCount = tasks.filter(task => task.status === 'completed').length;
  const progressPercent = Math.round((completedCount / tasks.length) * 100);

  this.progressByTimeframe = [{ label: 'day', value: progressPercent }];
}
}
