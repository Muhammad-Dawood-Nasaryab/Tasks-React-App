import { useState, useEffect } from "react";
import TaskList from "../TaskList/TaskList";
import Add from "../Add/Add";
import Edit from "../Edit/Edit";
import styles from "./Tasks.module.css";

interface Tasks {
  id: number;
  title: string;
  desc: string;
  editing: boolean;
};

const Tasks = () => {
  const [tasks, setTasks] = useState<Tasks[]>([]);
	const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
      console.log("Loaded tasks:", JSON.parse(storedTasks));
    }
		setIsInitialized(true);
  }, []);

  useEffect(() => {
		if (isInitialized) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks, isInitialized]);

  function handleEdit(id: number) {
    const updatedTasks = tasks.map((task) => task.id === id? {...task, editing: true } : task);
    setTasks(updatedTasks);
  };
  
  function handleDelete(id: number) {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  
  function addTask(newTask: Pick<Tasks, "title" | "desc">) {
    const taskWithId = { ...newTask, id: nextID, editing: false };
    setTasks([...tasks, taskWithId]);
  };

  function handleSave(updatedTask: Omit<Tasks, "id" | "editing">) {
    const updatedTasks = tasks.map((task) => 
      task.editing ? {...task, ...updatedTask, editing: false } : task);
    setTasks(updatedTasks);
  }

  const editingTask = tasks.find(task => task.editing);
  console.log("Is task editing: ", editingTask);
  
  const nextID = tasks.length > 0 ? Math.max(...tasks.map((task) => task.id)) + 1: 1;

  return (
    <div className={ styles.container }>
      { editingTask ? (
        <Edit 
          title={ editingTask.title } 
          desc={ editingTask.desc }
          onSave={ (updatedTask) => handleSave(updatedTask) }
        />
      ) : <Add onSubmit={ addTask } />}
      <TaskList 
        tasks={ tasks } 
        onDelete={ handleDelete } 
        onEdit={ (id: number) => handleEdit(id) }
      />
    </div>
  );
};

export default Tasks;