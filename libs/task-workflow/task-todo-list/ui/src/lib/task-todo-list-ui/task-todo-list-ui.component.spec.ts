import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskTodoListUiComponent } from './task-todo-list-ui.component';

describe('TaskTodoListUiComponent', () => {
  let component: TaskTodoListUiComponent;
  let fixture: ComponentFixture<TaskTodoListUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskTodoListUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskTodoListUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
