import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskCalendarUiComponent } from './task-calendar-ui.component';

describe('TaskCalendarUiComponent', () => {
  let component: TaskCalendarUiComponent;
  let fixture: ComponentFixture<TaskCalendarUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskCalendarUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskCalendarUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
