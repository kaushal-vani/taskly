import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserProfileSettingsUiComponent } from './user-profile-settings-ui.component';

describe('UserProfileSettingsUiComponent', () => {
  let component: UserProfileSettingsUiComponent;
  let fixture: ComponentFixture<UserProfileSettingsUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserProfileSettingsUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserProfileSettingsUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
