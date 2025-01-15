// Define an enum for Task Status
export enum TaskStatus {
    ToDo = 'To Do',
    InProgress = 'In Progress',
    Completed = 'Completed',
    OnHold = 'On Hold',
}

// Define an export enum for Task Priority
export enum TaskPriority {
    Low = 'Low',
    Medium = 'Medium',
    High = 'High',
}

// Define the Task interface
export type Task = {
    id: number; // Unique identifier for the task
    title: string; // Title of the task
    description?: string; // Optional description of the task
    dueDate?: Date; // Optional due date for the task
    status: TaskStatus; // Current status of the task
    priority: TaskPriority; // Priority level of the task
};
