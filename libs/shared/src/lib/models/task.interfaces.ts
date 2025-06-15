import { Priority, Status } from "../types";
import { Tags } from "../types/tags.types";

export interface Task {
  color?: string;
  createdAt?: Date;
  description?: string;
  dueDate: Date;
  _id: string;
  notificationEnabled?: boolean;
  priority: Priority
  reminderAt?: Date; // Specific time to notify the user
  status: Status;
  subTask: SubTask[];
  tags?: Tags[];
  title: string;
  updatedAt?: Date;
  userId: string;
}

export interface SubTask {
  isCompleted: boolean;
  title: string;
}
