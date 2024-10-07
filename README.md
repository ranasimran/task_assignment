# Task Manager App

This is a simple task management app built using **React** and **Lucide React Icons**. It allows users to create, edit, complete, and delete tasks. Task data is persisted in the browser's localStorage, so tasks remain available across page refreshes.

## Features

- **Add Task**: Add a new task with a title and description.
- **Edit Task**: Edit the title and description of an existing task.
- **Complete Task**: Mark a task as complete, with a visual indication (strikethrough).
- **Delete Task**: Remove a task from the list.
- **Filter Tasks**: Filter tasks by "All", "Completed", or "Pending".
- **Persist Tasks**: Tasks are saved in **localStorage** and persist across page refreshes.

## Tech Stack

- **React**: Frontend library for building the user interface.
- **Lucide React Icons**: Icon library for modern, lightweight icons in React.
- **Local Storage**: Used to store tasks locally and persist them across page refreshes.

## Setup Instructions

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/task-manager-app.git
   cd task-manager-app
   ```

2. **Install dependencies**:

   If you use `npm`:

   ```bash
   npm install
   ```

   If you use `yarn`:

   ```bash
   yarn install
   ```

### Running the App Locally

To run the app locally, use the following command:

```bash
npm start
```

or with yarn:

```bash
yarn start
```

This will start the development server. Open your browser and navigate to:

```
http://localhost:3000
```

### Build for Production

To build the app for production:

```bash
npm run build
```

or with yarn:

```bash
yarn build
```

This will create an optimized version of the app in the `build` folder.

## Project Structure

Here's an overview of the project's structure:

```
src/
│
├── components/
│   ├── TaskForm.js       # Form component to add/edit tasks
│   ├── TaskItem.js       # Component to display individual tasks
││
├── App.js                # Main component that handles task state and logic
├── index.js              # Entry point that renders the App component
├── App.css
```

### Key Files

- **App.js**: The main component responsible for handling the state of the tasks and managing the task list. It uses React's `useState` and `useEffect` to manage tasks and persist them using `localStorage`. and filters tasks by status (All, Completed, or Pending).
- **TaskForm.js**: A form to handle creating or editing tasks.
- **TaskItem.js**: Component that displays individual tasks with options to edit, delete, or mark as complete.

### Components

- **TaskForm**: Handles task creation and editing.
- **TaskItem**: Displays individual tasks with action buttons for edit, delete, and toggle completion.

## Local Storage

TThe app uses the browser's `localStorage` to persist tasks. When tasks are added, edited, completed, or deleted, the updated task list is saved to `localStorage`. On page load, the tasks are retrieved from `localStorage` to ensure persistence across refreshes

## Future Enhancements

Here are some optional improvements that can be made:

- **Task Filtering**: Add filters to show completed, pending, or all tasks.
- **Form Validation**: Add form validation to ensure that a task title and description are provided before submitting..
- **Due Dates**: Add the ability to assign due dates to tasks and sort them accordingly.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
