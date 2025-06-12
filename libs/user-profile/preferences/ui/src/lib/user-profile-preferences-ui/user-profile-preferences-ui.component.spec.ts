import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserProfilePreferencesUiComponent } from './user-profile-preferences-ui.component';

describe('UserProfilePreferencesUiComponent', () => {
  let component: UserProfilePreferencesUiComponent;
  let fixture: ComponentFixture<UserProfilePreferencesUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserProfilePreferencesUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserProfilePreferencesUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
