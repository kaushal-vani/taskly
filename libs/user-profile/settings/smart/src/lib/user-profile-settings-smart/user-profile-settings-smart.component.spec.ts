import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserProfileSettingsSmartComponent } from './user-profile-settings-smart.component';

describe('UserProfileSettingsSmartComponent', () => {
  let component: UserProfileSettingsSmartComponent;
  let fixture: ComponentFixture<UserProfileSettingsSmartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserProfileSettingsSmartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserProfileSettingsSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
