import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task, TaskService } from '@taskly/shared';
import { TaskListComponent } from '../../features/task-list/task-list.component';

@Component({
  selector: 'lib-task-list-page',
  imports: [CommonModule, TaskListComponent],
  templateUrl: './task-list-page.component.html',
  styleUrl: './task-list-page.component.scss',
})
export class TaskListPageComponent implements OnInit {
  tasks: Task[] = [];
  isLoading = true;
  error: string | null = null;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.fetchUserTasks().subscribe({
      next: (tasks) => {
        this.tasks = tasks;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Failed to load tasks';
        this.isLoading = false;
        console.error(err);
      }
    });
  }
}