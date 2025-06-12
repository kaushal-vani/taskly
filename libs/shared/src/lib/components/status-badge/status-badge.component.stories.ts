import type { Meta, StoryObj } from '@storybook/angular';
import { StatusBadgeComponent } from './status-badge.component';

const meta: Meta<StatusBadgeComponent> = {
  title: 'Shared/Status Badge',
  component: StatusBadgeComponent,
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['todo', 'in-progress', 'blocked', 'completed'],
    },
  },
};
export default meta;

type Story = StoryObj<StatusBadgeComponent>;

export const Todo: Story = {
  args: {
    status: 'todo',
  },
};

export const InProgress: Story = {
  args: {
    status: 'in-progress',
  },
};

export const Blocked: Story = {
  args: {
    status: 'blocked',
  },
};

export const Completed: Story = {
  args: {
    status: 'completed',
  },
};