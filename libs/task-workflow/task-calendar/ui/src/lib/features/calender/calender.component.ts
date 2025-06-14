import {
  Component,
  Input,
  OnInit,
  HostListener,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Task {
  id: string;
  title: string;
  description?: string;
  dueDate: Date;
  status: 'todo' | 'in-progress' | 'done';
  priority?: 'low' | 'medium' | 'high';
  tags?: string[];
  createdAt?: Date;
  updatedAt?: Date;
  time?: string; // e.g., '2:30 - 4:00 PM'
  color?: string;
}

@Component({
  selector: 'lib-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss'],
})
export class CalenderComponent implements OnInit {
  @Input() tasks: Task[] = [];

  currentMonth: Date = new Date();
  today: Date = new Date();
  weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  calendarDays: (Date | null)[] = [];

  isMobileView = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.checkViewport();
    this.generateCalendarDays();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkViewport();
  }

  private checkViewport() {
    this.isMobileView = window.innerWidth <= 868;
    this.cdr.detectChanges();
  }

  prevMonth(): void {
    this.currentMonth = new Date(
      this.currentMonth.getFullYear(),
      this.currentMonth.getMonth() - 1
    );
    this.generateCalendarDays();
  }

  nextMonth(): void {
    this.currentMonth = new Date(
      this.currentMonth.getFullYear(),
      this.currentMonth.getMonth() + 1
    );
    this.generateCalendarDays();
  }

  generateCalendarDays(): void {
    const year = this.currentMonth.getFullYear();
    const month = this.currentMonth.getMonth();

    const startOfMonth = new Date(year, month, 1);
    const endOfMonth = new Date(year, month + 1, 0);

    const startDay = startOfMonth.getDay();
    const totalDays = endOfMonth.getDate();

    const days: (Date | null)[] = [];

    for (let i = 0; i < startDay; i++) {
      days.push(null);
    }

    for (let i = 1; i <= totalDays; i++) {
      days.push(new Date(year, month, i));
    }

    this.calendarDays = days;
  }

  getTasksForDate(date: Date): Task[] {
    return this.tasks.filter(
      (task) =>
        task.dueDate &&
        new Date(task.dueDate).toDateString() === date.toDateString()
    );
  }

  hasOverdueTasks(date: Date): boolean {
    const today = new Date();
    return this.getTasksForDate(date).some(
      (task) => new Date(task.dueDate) < today && task.status !== 'done'
    );
  }

  isToday(date: Date | null): boolean {
    if (!date) return false;
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  }

  onDateClick(date: Date | null) {
    if (!date) return;
    console.log('Clicked date:', date);
  }

  getAriaLabel(date: Date): string {
    const taskCount = this.getTasksForDate(date).length;
    return `${date.toDateString()}, ${taskCount} task${
      taskCount !== 1 ? 's' : ''
    }`;
  }
}
