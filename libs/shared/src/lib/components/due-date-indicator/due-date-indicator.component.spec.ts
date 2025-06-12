import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DueDateIndicatorComponent } from './due-date-indicator.component';

describe('DueDateIndicatorComponent', () => {
  let component: DueDateIndicatorComponent;
  let fixture: ComponentFixture<DueDateIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DueDateIndicatorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DueDateIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
