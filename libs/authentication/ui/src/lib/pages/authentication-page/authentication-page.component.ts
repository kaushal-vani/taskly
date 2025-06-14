import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from '../../features/log-in/log-in.component';
import { SignUpComponent } from '../../features/sign-up/sign-up.component';
import { AUTH_VIEWS, AuthView } from '@taskly/shared';

@Component({
  selector: 'lib-authentication-page',
  imports: [CommonModule, LogInComponent,SignUpComponent],
  templateUrl: './authentication-page.component.html',
  styleUrl: './authentication-page.component.scss',
})
export class AuthenticationPageComponent {
  readonly AUTH_VIEWS = AUTH_VIEWS;
  currentView: AuthView = AUTH_VIEWS.LOGIN;

  switchTo(view: AuthView):void {
    this.currentView = view;
  }
}
