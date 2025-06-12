import type { Meta, StoryObj } from '@storybook/angular';
import { DueDateIndicatorComponent } from './due-date-indicator.component';

const meta: Meta<DueDateIndicatorComponent> = {
  title: 'Shared/Due Date Indicator',
  component: DueDateIndicatorComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<DueDateIndicatorComponent>;

const now = new Date();

export const Today: Story = {
  args: {
    dueDate: now,
  },
};

export const Tomorrow: Story = {
  args: {
    dueDate: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1),
  },
};

export const Overdue: Story = {
  args: {
    dueDate: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 2),
  },
};

export const Upcoming: Story = {
  args: {
    dueDate: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 5),
  },
};