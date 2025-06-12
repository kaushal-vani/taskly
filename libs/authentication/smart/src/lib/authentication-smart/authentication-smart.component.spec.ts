import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthenticationSmartComponent } from './authentication-smart.component';

describe('AuthenticationSmartComponent', () => {
  let component: AuthenticationSmartComponent;
  let fixture: ComponentFixture<AuthenticationSmartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthenticationSmartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthenticationSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
