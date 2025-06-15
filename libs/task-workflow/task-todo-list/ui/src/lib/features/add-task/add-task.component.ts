import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormArray, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Task, TaskService } from '@taskly/shared';

@Component({
  selector: 'lib-add-task',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss',
})
export class AddTaskComponent implements OnInit {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private taskService = inject(TaskService);

  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      dueDate: ['', Validators.required],
      subTask: this.fb.array([
        this.fb.group({ title: ['', Validators.required] }),
      ]),
      tags: [[]],
    });
  }

  get subTasks(): FormArray {
    return this.form.get('subTask') as FormArray;
  }

  addSubTask(): void {
    this.subTasks.push(this.fb.group({ title: ['', Validators.required] }));
  }

  removeSubTask(index: number): void {
    this.subTasks.removeAt(index);
  }

  onTagsBlur(event: Event): void {
    const input = event.target as HTMLInputElement;
    const tagsArray = input.value
      .split(',')
      .map((tag) => tag.trim())
      .filter((tag) => tag.length > 0);

    this.form.patchValue({ tags: tagsArray });
  }

  onSubmit(): void {
    if (this.form.invalid) return;

    const payload: Partial<Task> = {
      ...this.form.value,
      status: 'todo',
      priority: 'medium',
    };

    this.taskService.createTask(payload).subscribe({
      next: () => this.router.navigate(['/home']),
      error: (err) => console.error('Create Task Error:', err),
    });
  }
}