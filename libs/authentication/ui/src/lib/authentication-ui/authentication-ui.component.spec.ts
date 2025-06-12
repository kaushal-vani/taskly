import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthenticationUiComponent } from './authentication-ui.component';

describe('AuthenticationUiComponent', () => {
  let component: AuthenticationUiComponent;
  let fixture: ComponentFixture<AuthenticationUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthenticationUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthenticationUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
