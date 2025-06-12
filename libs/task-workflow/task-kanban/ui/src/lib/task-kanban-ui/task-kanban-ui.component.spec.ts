import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskKanbanUiComponent } from './task-kanban-ui.component';

describe('TaskKanbanUiComponent', () => {
  let component: TaskKanbanUiComponent;
  let fixture: ComponentFixture<TaskKanbanUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskKanbanUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskKanbanUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
