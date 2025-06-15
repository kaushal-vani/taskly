import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriorityIndicatorComponent, Task } from '@taskly/shared';

@Component({
  selector: 'lib-calender-day',
  imports: [CommonModule, PriorityIndicatorComponent],
  templateUrl: './calendar-day.component.html',
  styleUrl: './calendar-day.component.scss',
})
export class CalendarDayComponent {
  @Input() selectedDate!: Date;
  @Input() tasksForDate: Task[] = [];

  isOverdue(task: Task): boolean {
  const due = new Date(task.dueDate);
  const now = new Date();
  return task.status !== 'completed' && due < now;
}
onAddTask() {
  // Emit event or navigate to add task form/modal
  console.log('Add Task clicked');
}
}