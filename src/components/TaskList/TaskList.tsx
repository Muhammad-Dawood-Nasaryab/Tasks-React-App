import React from "react";
import TaskCard from "../TaskCard/TaskCard";
import { useTheme } from "../../hooks/useTheme";
import styles from "./TaskList.module.css";

interface Task {
  id: number;
  title: string;
  desc: string;
  editing: boolean;
}

interface TaskListProps {
  tasks: Task[];
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = React.memo(({ tasks, onDelete, onEdit }) => {
  const { isDarkMode } = useTheme();

  return (
    <div className={ isDarkMode ? styles.darkcontainer : styles.lightcontainer }>
      <h2>Task List</h2>
      <ul>
        { tasks.map((task) => (
          <li key={ task.id }>
            <TaskCard 
              id={ task.id }
              title={ task.title }
              desc={ task.desc }
              editing={ task.editing }
              onDelete={ onDelete } 
              onEdit={ onEdit } 
            />
          </li>
        )) }
      </ul>
    </div>
  );
});

export default TaskList;
