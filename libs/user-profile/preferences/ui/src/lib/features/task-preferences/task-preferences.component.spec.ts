import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskPreferencesComponent } from './task-preferences.component';

describe('TaskPreferencesComponent', () => {
  let component: TaskPreferencesComponent;
  let fixture: ComponentFixture<TaskPreferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskPreferencesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskPreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
