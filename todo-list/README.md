# Challenge Description: React Todo List Application

This challenge invites you to build a practical and interactive todo list application using React. The application will enable users to:

- **Add New Tasks:** Users can effortlessly create new tasks by entering them into an input field and clicking the "Add" button.
- **Manage Tasks:** The application displays a list of currently added tasks. Users can interact with these tasks in several ways:
  - **Mark as Completed:** By clicking on a task, users can mark it as completed. This will visually distinguish completed tasks from pending ones, typically by applying a line-through style.
  - **Remove Tasks**: Tasks deemed unnecessary can be removed from the list using a dedicated button (e.g., "X" or "Remove").


## Key Concepts and Implementation Details:

 - **React Components:** The application is structured using three primary React components:
   - `App.jsx`: This component serves as the main application container. It manages the overall state of the application, including the list of tasks and the value of the input field for adding new tasks.
   - `List.jsx`: This component represents an individual todo list item. It receives data about a specific task from the App.jsx component and handles the visual rendering of that task, including its text, completion status, and removal button.
   - `Form.jsx`: This component represents the form used for adding new tasks. It handles user input for new tasks and triggers the `addList` function in the `App.jsx` component when the form is submitted.
 - **State Management with `useState` Hook**: The application utilizes the `useState` hook to manage both the list of tasks (`list`) and the current input value (`acutalItem`). `useState` provides a way to store and update data within React components.
 - **Task Data Structure:** Each task in the `list` state is represented by an object with three properties:
     - `id`: A unique identifier for the task (typically generated using incremental values).
     - `text`: The actual text content of the task.
     - `mark`: A boolean flag indicating whether the task is marked as completed (true) or not (false).
 - **Adding New Tasks:** The `addList` function in `App.jsx` handles adding a new task to the `list` state:
     1. **Preventing Default Form Behavior:** The `e.preventDefault()` call inside `addList` ensures that the default form submission behavior (usually page refresh) is prevented.
     2. **Generating Unique IDs:** The function uses `Math.max` to determine the highest existing ID in the list and adds 1 to generate a new unique ID for the new task.
     3. **Updating State:** The `setList` function is used to update the `list` state with the new task. It creates a copy of the existing state using spread syntax (`...prevState`), adds the new task object with the generated ID and current input value, and sets the `mark` flag to `false` (indicating not completed).
 - **Removing Tasks:** The `removeItem` function in `App.jsx` allows users to remove a task from the `list` state:
     1. **Filtering Remaining Tasks:** The function utilizes the `filter` method to create a new array containing only tasks whose IDs don't match the ID of the clicked button (representing the task to be removed).
     2. **Updating State:** The filtered `list` is then used to update the list state using `setList`.
 - **Marking Tasks as Completed:** The `markupItem` function in `App.jsx` handles toggling the completion status of a task:
     1. **Mapping Through Tasks:** The function iterates over the existing tasks using `map`.
     2. **Conditional Update:** For each task, it checks if the current task's ID matches the clicked button's ID. If so, it creates a copy of the current task object using spread syntax (`...item`) and flips the `mark` flag using the logical NOT operator (`!`). This effectively toggles the completion status.
     3. **Updating State:** The `map` function then returns the updated task object or the original task object if it's not the one being marked. The resulting array is used to update the `list` state using `setList`.
 - **Rendering Components:** The `App.jsx` component renders two vital components:
     - `Form.jsx`: This component provides the input field and "Add" button for creating new tasks. It passes the handleSubmit function for adding new tasks and the handleChange function for updating the input value as props.
     - The `List.jsx` component shows each todo item. It receives info and functions from `App.jsx` to:

       - Display the task text.
       - Apply a line-through style for completed tasks.
       - Include a button to remove the task.
       - Include a button to mark the task as completed (toggling line-through).