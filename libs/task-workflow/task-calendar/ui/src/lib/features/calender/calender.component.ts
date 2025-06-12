import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { DueDateIndicatorComponent } from '@taskly/shared';

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
  standalone: true,
  imports: [CommonModule, DueDateIndicatorComponent]
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
    if (!date) return false;
    const today = this.stripTime(new Date());
    const checkDate = this.stripTime(date);
    return today.getTime() === checkDate.getTime();
  }

  isOverdueDate(date: Date): boolean {
    const cellDate = this.stripTime(date);
    const today = this.stripTime(new Date());

    if (cellDate >= today) return false;

    return this.tasks.some(task => {
      const taskDate = this.stripTime(new Date(task.dueDate));
      return (
        taskDate.getTime() === cellDate.getTime() &&
        task.status !== 'done' &&
        taskDate < today
      );
    });
  }

  getAriaLabel(date: Date): string {
    return `Tasks for ${date.toDateString()}`;
  }

  getTasksForDate(date: Date): Task[] {
    const cellDate = this.stripTime(date);
    return this.tasks.filter(
      task => this.stripTime(new Date(task.dueDate)).getTime() === cellDate.getTime()
    );
  }

  hasOverdueTasks(date: Date): boolean {
    return this.isOverdueDate(date);
  }

  isOverdue(task: Task): boolean {
    const today = this.stripTime(new Date());
    const due = this.stripTime(new Date(task.dueDate));
    return task.status !== 'done' && due < today;
  }

  stripTime(date: Date): Date {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  }

  onDateClick(date: Date | null): void {
    if (date) {
      console.log('Date clicked:', date);
    }
  }

  prevMonth(): void {
    this.currentMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() - 1, 1);
    this.generateCalendar();
  }

  nextMonth(): void {
    this.currentMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 1, 1);
    this.generateCalendar();
  }
}