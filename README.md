To-Do Manager Application
=========================

A responsive **task management app** built with React, leveraging custom hooks, **React Context API**, **React Hook Form**, and **dynamic modals**. This project allows users to manage tasks effectively, with features like **adding**, **editing**, and **deleting tasks**. State management is optimized through Context and local storage, ensuring smooth user experience.

## Features

- **Custom Hooks:** Centralized logic with reusable hooks for tasks and theme management.
- **Responsive Design:** Optimized for various screen sizes, ensuring accessibility on desktops, tablets, and mobile devices.
- **React Hook Form:** Used for form validation with real-time error handling for task creation and editing.
- **React Context API:** Manages global states such as modals and theme toggling.
- **Local Storage:** Saves tasks so they persist across sessions.
- **React Profiler:** Performance monitoring to identify and optimize bottlenecks.

## Technologies Used

- **React**
- **React Hook Form**
- **React Context API**
- **Custom Hooks**
- **CSS Modules** for styling
- **React Profiler** for performance analysis
- **Local Storage** for task persistence

## Setup and Installation

1. Clone the repository:  
```bash
git clone https://github.com/Muhammad-Dawood-Nasaryab/Tasks-React-App.git
cd Tasks-React-App
```

2. Install dependencies:  
```bash
npm install
```

3. Run the application:  
```bash
npm run dev
```

4. Open in Browser:  
Navigate to http://localhost:5173.

## Custom Hooks
This project uses the following **custom hooks**:

### useTasks.ts
Manages the state of tasks, including adding, editing, deleting, and updating tasks in local storage.

### useTheme.ts
Handles the light/dark theme toggle.

### useModal.ts
Manages the alert through custom styling 

## How It Works

1. **Adding Tasks:** Users can add tasks through the form, with validation for required fields and length.
2. **Editing Tasks:** Users can edit existing tasks by clicking on the "Edit" button, which opens a pre-filled form.
3. **Deleting Tasks:** Tasks can be deleted with a **confirmation modal**.
4. **Persisting Data:** Tasks are saved in **local storage** to maintain state across sessions.
5. **Theme Toggle:** The app supports **dark mode**, with the theme managed using the **React Context API**.

## Responsive Design
The app is fully responsive with CSS Modules, ensuring a smooth experience on:

- Desktops
- Tablets
- Mobile Devices

## Performance Monitoring Techniques
This project utilizes the following performance monitoring tools and techniques to ensure optimal performance:

1. React Profiler
   - Used to measure the performance of React components by tracking **render times** and identifying **re-renders**.
   - The <code>Profiler</code> component is wrapped around key components to log metrics such as **mount/update durations** and **interactions**.

2. React.memo
    - Used to prevent unnecessary re-renders by memoizing components like <code>TaskList</code> and <code>TaskCard</code>.
    - Ensures that components only re-render when their props change, improving performance.
  
3. Lazy Loading with <code>React.lazy()</code> and <code>Suspense</code>
    - Optimizes initial load time by dynamically loading components only when needed, using code-splitting techniques.
  
4. useCallback and useMemo Hooks
    - <code>useCallback</code>: Memoizes callback functions to avoid unnecessary re-creations during re-renders.
    - <code>useMemo</code>: Memoizes computed values to optimize complex calculations.

5. Analyzing Performance with DevTools
    - React DevTools Profiler is used to **identify bottlenecks** and **analyze component render behavior**.
    - Tracks components that render frequently or take longer than expected, helping to optimize state updates.

These techniques ensure that the **To-Do Manager** app remains performant, even as the task list grows, by avoiding unnecessary re-renders and leveraging code-splitting for faster load times.
