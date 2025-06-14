import type { Meta, StoryObj } from '@storybook/angular';
import { SignUpComponent } from './sign-up.component';


const meta: Meta<SignUpComponent> = {
  title: 'Authentication/Sign-Up Page',
  component: SignUpComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<SignUpComponent>;

export const Default: Story = {
  args: {},
};