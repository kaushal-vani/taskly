import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TasklyKanbanComponent } from './taskly-kanban.component';

describe('TasklyKanbanComponent', () => {
  let component: TasklyKanbanComponent;
  let fixture: ComponentFixture<TasklyKanbanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasklyKanbanComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TasklyKanbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
