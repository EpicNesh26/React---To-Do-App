## To-Do List Application
This To-Do List application is a learning project designed to help users manage their daily tasks effectively. Built with React, it allows users to add, edit, and delete tasks, while persisting the task list using localStorage. The project aims to provide a hands-on experience with React state management, effect hooks, and local storage integration, making it a valuable educational tool for aspiring web developers.

### Features
**Add Tasks**: Quickly add new tasks to your to-do list.
**Edit Tasks**: Modify existing tasks without removing them from the list.
**Delete Tasks**: Remove tasks that are no longer needed.
**Toggle Completion**: Mark tasks as completed or incomplete.
**Persist Data**: Tasks are saved in localStorage, ensuring they persist across browser sessions.

### Technologies Used
- React
- JavaScript (ES6+)
- HTML5
- CSS3
- uuid (for unique task IDs)

### Getting Started
Prerequisites
- Node.js (version 14 or later)
- npm (version 6 or later)

### Installation
1. Clone the repository
```sh
https://github.com/EpicNesh26/React---To-Do-App.git
```

2. Navigate to the project directory:
```sh
cd todo-list-app
```

3. Install the dependencies:
{install the dependencies shown in package-lock.json}
```sh
npm install 
```

### Running the Application
1. Start the development server:
```sh
npm run dev
```

2. Open your browser and navigate to:
```sh
http://localhost:5173
```

### Building for Production
To create a production build of the application, run:
```sh
npm run build
```

### Usage
1. Adding a Task: Enter a task in the input field and click "Add To-Do".
2. Editing a Task: Click the "Edit" button next to a task, modify the task in the input field, and click "Update To-Do".
3. Deleting a Task: Click the "Delete" button next to a task to remove it from the list.
4. Toggling Task Completion: Click the checkbox next to a task to mark it as completed or incomplete.

### Contributing
Contributions are welcome! If you have any suggestions or improvements, please create an issue or submit a pull request.

### License
This project is licensed under the MIT License. See the LICENSE file for details.

### Acknowledgements
This project was created as a learning exercise to practice React development, state management, and localStorage integration.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
