import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserProfilePreferencesSmartComponent } from './user-profile-preferences-smart.component';

describe('UserProfilePreferencesSmartComponent', () => {
  let component: UserProfilePreferencesSmartComponent;
  let fixture: ComponentFixture<UserProfilePreferencesSmartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserProfilePreferencesSmartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserProfilePreferencesSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
