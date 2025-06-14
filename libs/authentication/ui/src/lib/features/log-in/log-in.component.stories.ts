import type { Meta, StoryObj } from '@storybook/angular';
import { LogInComponent } from './log-in.component'

const meta: Meta<LogInComponent> = {
  title: 'Authentication/Log-in Page',
  component: LogInComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<LogInComponent>;

export const Default: Story = {
  args: {},
};