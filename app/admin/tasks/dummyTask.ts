import { Task, TaskPriority, TaskStatus } from '@/types/Task.entity';
// Importing necessary libraries for random generation
const random = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

// Sample titles and descriptions
const titles = [
    'Learn TypeScript',
    'Build a project',
    'Write documentation',
    'Fix bugs',
    'Refactor code',
    'Implement new features',
    'Conduct code reviews',
    'Prepare for deployment',
    'Test application',
    'Update dependencies',
    'Create UI mockups',
    'Design database schema',
    'Set up CI/CD pipeline',
    'Optimize performance',
    'Conduct user research',
    'Prepare presentation',
    'Attend team meeting',
    'Review pull requests',
    'Plan sprint',
    'Conduct training session',
];

const descriptions = [
    'Study the basics of TypeScript and its features.',
    'Create a sample project using TypeScript.',
    'Document the codebase for better understanding.',
    'Fix the bugs reported in the last sprint.',
    'Refactor the existing code for better readability.',
    'Implement the new features as per the requirements.',
    'Review the code submitted by team members.',
    'Prepare the application for deployment to production.',
    'Test the application for any issues before release.',
    'Update the project dependencies to the latest versions.',
    'Create mockups for the new user interface.',
    'Design the database schema for the new application.',
    'Set up a CI/CD pipeline for automated testing and deployment.',
    'Optimize the application performance for better user experience.',
    'Conduct user research to gather feedback.',
    'Prepare a presentation for the upcoming meeting.',
    'Attend the weekly team meeting to discuss progress.',
    'Review the pull requests submitted by team members.',
    'Plan the next sprint based on team capacity.',
    'Conduct a training session for new team members.',
];

// Generate a list of 20 tasks
export const tasks: Task[] = Array.from({ length: 20 }, (_, index) => {
    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + random(1, 30)); // Random due date within the next 30 days

    return {
        id: index + 1,
        title: titles[random(0, titles.length - 1)],
        description: descriptions[random(0, descriptions.length - 1)],
        dueDate: dueDate,
        status: Object.values(TaskStatus)[random(0, Object.values(TaskStatus).length - 1)],
        priority: Object.values(TaskPriority)[random(0, Object.values(TaskPriority).length - 1)],
    };
});