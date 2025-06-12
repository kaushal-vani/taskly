import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PriorityIndicatorComponent } from './priority-indicator.component';

describe('PriorityIndicatorComponent', () => {
  let component: PriorityIndicatorComponent;
  let fixture: ComponentFixture<PriorityIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriorityIndicatorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PriorityIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
