import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotificationSmartComponent } from './notification-smart.component';

describe('NotificationSmartComponent', () => {
  let component: NotificationSmartComponent;
  let fixture: ComponentFixture<NotificationSmartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationSmartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NotificationSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
