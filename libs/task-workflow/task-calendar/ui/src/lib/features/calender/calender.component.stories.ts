import { Meta, StoryObj } from '@storybook/angular';
import { CalenderComponent, Task } from './calender.component';

const today = new Date();
const addDays = (base: Date, offset: number) => {
  const copy = new Date(base);
  copy.setDate(copy.getDate() + offset);
  return copy;
};

const sampleTasks: Task[] = [
  // Tasks in the past
  {
    id: 'past-1',
    title: 'Fix production bug',
    dueDate: addDays(today, -5),
    status: 'in-progress',
  },
  {
    id: 'past-2',
    title: 'Code review',
    dueDate: addDays(today, -1),
    status: 'in-progress',
  },

  // Tasks today
  {
    id: 'today-1',
    title: 'Design mockups',
    dueDate: today,
    status: 'todo',
  },
  {
    id: 'today-2',
    title: 'Sprint planning',
    dueDate: today,
    status: 'in-progress',
  },

  // Tasks in the future
  {
    id: 'future-1',
    title: 'Client demo',
    dueDate: addDays(today, 2),
    status: 'todo',
  },
  {
    id: 'future-2',
    title: 'Refactor modules',
    dueDate: addDays(today, 5),
    status: 'in-progress',
  },

  // Multiple tasks on same future date
  {
    id: 'future-3',
    title: 'Test calendar layout',
    dueDate: addDays(today, 5),
    status: 'todo',
  },
  {
    id: 'future-4',
    title: 'Review analytics',
    dueDate: addDays(today, 5),
    status: 'done',
  },
];

const meta: Meta<CalenderComponent> = {
  title: 'Task Workflow/CalenderComponent',
  component: CalenderComponent,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<CalenderComponent>;

export const DefaultView: Story = {
  args: {
    tasks: sampleTasks,
  },
};