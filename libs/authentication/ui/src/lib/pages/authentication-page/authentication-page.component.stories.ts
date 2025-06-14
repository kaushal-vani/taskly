import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { AuthenticationPageComponent } from './authentication-page.component';

import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LogInComponent } from '../../features/log-in/log-in.component';
import { SignUpComponent } from '../../features/sign-up/sign-up.component';

const meta: Meta<AuthenticationPageComponent> = {
  title: 'Authentication/Authentication Page',
  component: AuthenticationPageComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, ReactiveFormsModule,LogInComponent, SignUpComponent],
    }),
  ],
};

export default meta;
type Story = StoryObj<AuthenticationPageComponent>;

export const ShowLogin: Story = {
  args: {
    currentView: 'login',
  },
};

export const ShowSignUp: Story = {
  args: {
    currentView: 'signup',
  },
};