import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Task, Tags, Priority, Status, SubTask, TaskService } from '@taskly/shared';

@Component({
  selector: 'lib-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class AddTaskComponent implements OnInit {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private taskService = inject(TaskService);

  form!: FormGroup;
  subTaskInputControl = new FormControl('');

  tagOptions: Tags[] = ['personal', 'work', 'health', 'study', 'event', 'follow-up', 'meeting'];
  priorityOptions: Priority[] = ['low', 'medium', 'high', 'very-high'];
  statusOptions: Status[] = ['todo', 'in-progress', 'blocked', 'completed'];

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      reminderAt: [null],
      notificationEnabled: [false],
      priority: ['medium'],
      status: ['todo'],
      dueDate: ['', Validators.required],
      tags: [[]],
      subTask: this.fb.array([]),
    });
  }

   get subTasks(): FormArray {
  return this.form.get('subTask') as FormArray;
}


  toggleTag(tag: Tags): void {
    const currentTags: Tags[] = this.form.value.tags;
    const updatedTags = currentTags.includes(tag)
      ? currentTags.filter(t => t !== tag)
      : [...currentTags, tag];

    this.form.patchValue({ tags: updatedTags });
  }

  
onSubTaskEnter(event: Event): void {
  this.addSubTask(event as KeyboardEvent);
}

  addSubTask(event: KeyboardEvent): void {
    event.preventDefault();
    const title = this.subTaskInputControl.value?.trim();
    if (title) {
      this.subTasks.push(this.fb.group({
        title: [title],
        isCompleted: [false]
      }));
      this.subTaskInputControl.reset();
    }
  }


getSubTaskFormGroup(index: number): FormGroup {
  return this.subTasks.at(index) as FormGroup;
}

  removeSubTask(index: number): void {
    this.subTasks.removeAt(index);
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const payload: Partial<Task> = {
      ...this.form.value,
      subTask: this.form.value.subTask.map((s: SubTask) => ({
        title: s.title,
        isCompleted: !!s.isCompleted
      }))
    };

    this.taskService.createTask(payload).subscribe({
      next: () => this.router.navigate(['/home']),
      error: (err) => console.error('Task creation failed', err)
    });
  }
}