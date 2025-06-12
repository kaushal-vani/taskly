import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

export interface Task {
  id: string;
  title: string;
  dueDate: Date;
  status: 'todo' | 'in-progress' | 'done';
}

@Component({
  selector: 'lib-calendar',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss'],
  imports:[CommonModule]
})
export class CalenderComponent implements OnInit {
  @Input() tasks: Task[] = [];

  currentMonth = new Date();
  weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  calendarDays: (Date | null)[] = [];

  ngOnInit(): void {
    this.generateCalendar();
  }

  generateCalendar(): void {
    const start = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth(), 1);
    const end = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 1, 0);
    const calendar: (Date | null)[] = [];

    const startDay = start.getDay();
    for (let i = 0; i < startDay; i++) {
      calendar.push(null);
    }

    for (let d = 1; d <= end.getDate(); d++) {
      calendar.push(new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth(), d));
    }

    this.calendarDays = calendar;
  }

  isToday(date: Date | null): boolean {
    const today = new Date();
    return (
      date?.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  }

  onDateClick(date: Date | null): void {
    if (date) {
      console.log('Date clicked:', date);
    }
  }

  getAriaLabel(date: Date): string {
    return `Tasks for ${date.toDateString()}`;
  }

  getTasksForDate(date: Date): Task[] {
    return this.tasks.filter(
      (task) =>
        new Date(task.dueDate).toDateString() === date.toDateString()
    );
  }

  prevMonth(): void {
    this.currentMonth = new Date(this.currentMonth.setMonth(this.currentMonth.getMonth() - 1));
    this.generateCalendar();
  }

  nextMonth(): void {
    this.currentMonth = new Date(this.currentMonth.setMonth(this.currentMonth.getMonth() + 1));
    this.generateCalendar();
  }
}