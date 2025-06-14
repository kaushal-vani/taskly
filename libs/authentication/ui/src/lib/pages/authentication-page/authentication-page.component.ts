import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from '../../features/log-in/log-in.component';
import { SignUpComponent } from '../../features/sign-up/sign-up.component';

@Component({
  selector: 'lib-authentication-page',
  imports: [CommonModule, LogInComponent,SignUpComponent],
  templateUrl: './authentication-page.component.html',
  styleUrl: './authentication-page.component.scss',
})
export class AuthenticationPageComponent {
  currentView: 'login' | 'signup' = 'login';

  switchTo(view: 'login' | 'signup'):void {
    this.currentView = view;
  }
}
