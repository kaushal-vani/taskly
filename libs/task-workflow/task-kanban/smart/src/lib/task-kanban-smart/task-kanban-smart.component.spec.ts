import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskKanbanSmartComponent } from './task-kanban-smart.component';

describe('TaskKanbanSmartComponent', () => {
  let component: TaskKanbanSmartComponent;
  let fixture: ComponentFixture<TaskKanbanSmartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskKanbanSmartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskKanbanSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
