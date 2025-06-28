import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task, Status, TaskService, PriorityIndicatorComponent } from '@taskly/shared';
import { take } from 'rxjs';

@Component({
  selector: 'lib-task-list',
  imports: [CommonModule, PriorityIndicatorComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent implements OnInit {
  taskService = inject(TaskService);
  private cdr = inject(ChangeDetectorRef);

  statuses: Status[] = ['todo', 'in-progress', 'completed'];

  tasks: Record<Status, Task[]> = {
    todo: [],
    'in-progress': [],
    blocked: [],
    completed: [],
  };

  draggedTask: { task: Task; from: Status } | null = null;

  ngOnInit(): void {
    this.fetchTasksFromAPI();
  }

  private fetchTasksFromAPI(): void {
    this.taskService.fetchUserTasks().pipe(take(1)).subscribe({
      next: (fetchedTasks: Task[]) => {
        this.statuses.forEach((status) => {
          this.tasks[status] = fetchedTasks.filter((task) => task.status === status);
        });
        this.cdr.markForCheck();
      },
      error: (err) => {
        console.error('Error fetching tasks:', err);
      },
    });
  }

  onDragStart(event: DragEvent, task: Task, status: Status) {
    this.draggedTask = { task, from: status };
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onDrop(event: DragEvent, toStatus: Status) {
    event.preventDefault();
    if (this.draggedTask && this.draggedTask.from !== toStatus) {
      const { task, from } = this.draggedTask;
      this.tasks[from] = this.tasks[from].filter((t) => t._id !== task._id);
      task.status = toStatus;
      this.tasks[toStatus].push(task);

      this.taskService.updateTask(task._id, { status: toStatus }).pipe(take(1)).subscribe({
        next: () => console.log('Task status updated'),
        error: (err) => console.error('Update failed', err),
      });
    }

    this.draggedTask = null;
  }

  getDaysLeft(dueDate: Date): string {
    const today = new Date();
    const due = new Date(dueDate);
    const diff = Math.ceil((+due - +today) / (1000 * 60 * 60 * 24));
    if (diff < 0) return `${Math.abs(diff)} Days Overdue`;
    if (diff === 0) return `Due Today`;
    return `${diff} Days Left`;
  }

  isOverdue(dueDate: Date): boolean {
    return new Date(dueDate) < new Date();
  }

  formatStatus(status: Status): string {
    return status.replace('-', ' ').replace(/\b\w/g, (l) => l.toUpperCase());
  }

  getPriorityLevel(priority: string | undefined): 'low' | 'medium' | 'high' | 'very-high' {
    const safe = priority?.toLowerCase() ?? 'low';
    if (['low', 'medium', 'high', 'very-high'].includes(safe)) {
      return safe as 'low' | 'medium' | 'high' | 'very-high';
    }
    return 'low';
  }
}