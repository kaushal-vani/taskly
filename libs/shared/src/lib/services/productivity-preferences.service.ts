// shared/services/productivity-preferences.service.ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProductivityPreferencesService {
  focusModeEnabled = false;
  workInterval = 25;
  shortBreak = 5;
  longBreak = 15;

  setPreferences(prefs: {
    focusModeEnabled: boolean;
    workInterval: number;
    shortBreak: number;
    longBreak: number;
  }) {
    this.focusModeEnabled = prefs.focusModeEnabled;
    this.workInterval = prefs.workInterval;
    this.shortBreak = prefs.shortBreak;
    this.longBreak = prefs.longBreak;
  }

  getPreferences() {
    return {
      focusModeEnabled: this.focusModeEnabled,
      workInterval: this.workInterval,
      shortBreak: this.shortBreak,
      longBreak: this.longBreak,
    };
  }
}