import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiPreferencesComponent } from './ui-preferences.component';

describe('UiPreferencesComponent', () => {
  let component: UiPreferencesComponent;
  let fixture: ComponentFixture<UiPreferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiPreferencesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiPreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
