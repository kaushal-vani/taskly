import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskTodoListSmartComponent } from './task-todo-list-smart.component';

describe('TaskTodoListSmartComponent', () => {
  let component: TaskTodoListSmartComponent;
  let fixture: ComponentFixture<TaskTodoListSmartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskTodoListSmartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskTodoListSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
