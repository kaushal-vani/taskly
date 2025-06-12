import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlertSmartComponent } from './alert-smart.component';

describe('AlertSmartComponent', () => {
  let component: AlertSmartComponent;
  let fixture: ComponentFixture<AlertSmartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertSmartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AlertSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
