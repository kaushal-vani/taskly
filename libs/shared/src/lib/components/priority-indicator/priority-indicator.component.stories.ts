import type { Meta, StoryObj } from '@storybook/angular';
import { PriorityIndicatorComponent } from './priority-indicator.component';

const meta: Meta<PriorityIndicatorComponent> = {
  component: PriorityIndicatorComponent,
  title: 'Shared/Priority Indicator',
  tags: ['autodocs'],
  argTypes: {
    level: {
      control: { type: 'select' },
      options: ['low', 'medium', 'high', 'very-high'],
    },
  },
};
export default meta;
type Story = StoryObj<PriorityIndicatorComponent>;

export const Low: Story = {
  args: { level: 'low' },
};

export const Medium: Story = {
  args: { level: 'medium' },
};
export const High: Story = {
  args: { level: 'high' },
};

export const VeryHigh: Story = {
  args: { level: 'very-high' },
};