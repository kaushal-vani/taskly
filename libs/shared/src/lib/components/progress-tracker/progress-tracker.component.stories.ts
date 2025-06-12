import type { Meta, StoryObj } from '@storybook/angular';
import { ProgressTrackerComponent } from './progress-tracker.component';

const meta: Meta<ProgressTrackerComponent> = {
  title: 'Shared/Progress Tracker',
  component: ProgressTrackerComponent,
  tags: ['autodocs'],
  decorators: [],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<ProgressTrackerComponent>;

export const Default: Story = {
  name: 'Default',
  args: {
    progressByTimeframe: [
      { label: 'day', value: 20 },
      { label: 'week', value: 45 },
      { label: 'month', value: 75 },
      { label: 'overall', value: 97 },
    ],
  },
};

export const Empty: Story = {
  name: 'Empty Tracker',
  args: {
    progressByTimeframe: [],
  },
};

export const HighProgress: Story = {
  name: 'Day Completion',
  args: {
    progressByTimeframe: [
      { label: 'day', value: 99 },
    ],
  },
};