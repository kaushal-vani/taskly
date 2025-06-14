import { Meta, StoryObj } from '@storybook/angular';
import { CalenderComponent, Task } from './calendar.component';

const meta: Meta<CalenderComponent> = {
  title: 'Calendar/CalenderComponent',
  component: CalenderComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<CalenderComponent>;

const sampleTasks: Task[] = [
  {
    id: '1',
    title: 'Complete project proposal',
    dueDate: new Date(),
    status: 'in-progress',
    color: '#fde68a',
  },
  {
    id: '2',
    title: 'Review PR #42',
    dueDate: new Date(),
    status: 'todo',
    color: '#a7f3d0',
  },  {
    id: '3',
    title: 'Review PR #43',
    dueDate: new Date(),
    status: 'todo',
    color: '#a7f3d0',
  },
  {
    id: '4',
    title: 'Fix bug in dashboard',
    dueDate: new Date(new Date().setDate(new Date().getDate() + 1)),
    status: 'todo',
    color: '#fca5a5',
  },
  {
    id: '5',
    title: 'Overdue task',
    dueDate: new Date(new Date().setDate(new Date().getDate() - 2)),
    status: 'todo',
    color: '#fecaca',
  },
];

export const Primary: Story = {
  args: {
    tasks: sampleTasks,
  },
};