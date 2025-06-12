import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlertUiComponent } from './alert-ui.component';

describe('AlertUiComponent', () => {
  let component: AlertUiComponent;
  let fixture: ComponentFixture<AlertUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AlertUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
