import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertService, ProductivityPreferencesService } from '@taskly/shared';

@Component({
  selector: 'lib-pomodoro-timer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pomodoro-timer.component.html',
  styleUrl: './pomodoro-timer.component.scss',
})
export class PomodoroTimerComponent implements OnInit {
  alertService = inject(AlertService);
  productivityPreferencesService = inject(ProductivityPreferencesService);
  workDuration = 25 * 60;
  shortBreak = 5 * 60;
  longBreak = 15 * 60;

  timerSound = new Audio('assets/sounds/timer.mp3');

  timeLeft = this.workDuration;
  private timer: ReturnType<typeof setInterval> | null = null;
  isRunning = false;
  sessionType: 'work' | 'shortBreak' | 'longBreak' = 'work';

  ngOnInit() {
    const prodPref = this.productivityPreferencesService.getPreferences();
    this.workDuration = prodPref.workInterval * 60;
    this.shortBreak = prodPref.shortBreak * 60;
    this.longBreak = prodPref.longBreak * 60;
    this.timeLeft = this.workDuration;
  }

  get minutes(): number {
    return Math.floor(this.timeLeft / 60);
  }

  get seconds(): number {
    return this.timeLeft % 60;
  }

  toggleTimer() {
  if (this.isRunning) {
    this.pauseTimer();
  } else {
    this.startTimer();
  }
}
getProgressGradient(): string {
  const totalDuration = this.getSessionDuration(this.sessionType);
  const percent = ((totalDuration - this.timeLeft) / totalDuration) * 100;
  const progressColor = '#000'; // primary color (e.g., black for Taskly theme)
  const backgroundColor = '#e5e7eb'; // light gray

  return `conic-gradient(${progressColor} ${percent}%, ${backgroundColor} ${percent}%)`;
}

  formatTime(): string {
    const minutes = Math.floor(this.timeLeft / 60);
    const seconds = this.timeLeft % 60;
    return `${minutes < 10 ? '0' + minutes : minutes}:${
      seconds < 10 ? '0' + seconds : seconds
    }`;
  }
  getSessionDuration(type: 'work' | 'shortBreak' | 'longBreak'): number {
    switch (type) {
      case 'shortBreak':
        return this.shortBreak;
      case 'longBreak':
        return this.longBreak;
      case 'work':
      default:
        return this.workDuration;
    }
  }

  startTimer() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.timer = setInterval(() => {
        if (this.timeLeft > 0) {
          this.timeLeft--;
        } else {
          this.completeSession();
        }
      }, 1000);
    }
  }

  pauseTimer() {
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this.isRunning = false;
  }

  resetTimer() {
    this.pauseTimer();
    this.timeLeft = this.getSessionDuration(this.sessionType);
  }

completeSession() {
  this.pauseTimer();
  this.timerSound.play().catch((err) => {
    console.error('Failed to play alarm:', err);
  });
  this.alertService.show(
    `Time for a ${this.sessionType === 'work' ? 'break' : 'work session'}!`,
    'success'
  );
  this.timeLeft = this.getSessionDuration(this.sessionType);
}

  switchSession(type: 'work' | 'shortBreak' | 'longBreak') {
    this.sessionType = type;
    this.resetTimer();
  }

  setMode(type: 'work' | 'shortBreak' | 'longBreak') {
    this.switchSession(type);
  }
}
