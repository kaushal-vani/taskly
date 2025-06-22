import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task, Status } from '@taskly/shared';

@Component({
  selector: 'lib-task-list',
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent implements OnInit {
  @Input() tasks: Task[] = [];

  statuses: Status[] = ['todo', 'in-progress', 'completed'];
  tasksByStatus: { [key in Status]: Task[] } = {
    'todo': [],
    'in-progress': [],
    'completed': [],
    'blocked':[],
  };

  ngOnInit(): void {
    this.groupTasksByStatus();
  }

  groupTasksByStatus(): void {
    this.statuses.forEach(status => {
      this.tasksByStatus[status] = this.tasks.filter(task => task.status === status);
    });
  }

  formatStatus(status: Status): string {
    switch (status) {
      case 'todo': return 'TODO';
      case 'in-progress': return 'IN PROGRESS';
      case 'completed': return 'COMPLETED';
      default: return status;
    }
  }

  getDueText(dueDate: Date): string {
    const now = new Date();
    const due = new Date(dueDate);
    const diffMs = due.getTime() - now.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffHours / 24);

    if (diffHours < 24) {
      return `${diffHours} hours left`;
    }
    return `${diffDays} days left`;
  }
}