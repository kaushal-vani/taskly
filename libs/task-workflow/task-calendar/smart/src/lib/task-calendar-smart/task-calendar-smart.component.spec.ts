import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskCalendarSmartComponent } from './task-calendar-smart.component';

describe('TaskCalendarSmartComponent', () => {
  let component: TaskCalendarSmartComponent;
  let fixture: ComponentFixture<TaskCalendarSmartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskCalendarSmartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskCalendarSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
