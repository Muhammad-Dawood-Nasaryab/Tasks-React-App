import { useState, useCallback, useEffect } from "react";

interface Tasks {
  id: number;
  title: string;
  desc: string;
  editing: boolean;
};

export const useTasks = () => {
	const [tasks, setTasks] = useState<Tasks[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

	useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) setTasks(JSON.parse(storedTasks));
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    };
  }, [tasks, isInitialized]);

	const deleteTask = useCallback((id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }, []);

  const editTask = useCallback((id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, editing: true } : task))
    );
  }, []);

  const saveTask = useCallback((updatedTask: Omit<Tasks, "id" | "editing">) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.editing ? { ...task, ...updatedTask, editing: false } : task
      )
    );
  }, []);

  const addTask = useCallback((newTask: Pick<Tasks, "title" | "desc">) => {
    const nextID = tasks.length > 0 ? Math.max(...tasks.map((t) => t.id)) + 1 : 1;
    const taskWithId = { ...newTask, id: nextID, editing: false };
    setTasks((prevTasks) => [...prevTasks, taskWithId]);
  }, [tasks]);

	return { tasks, deleteTask, editTask, saveTask, addTask };
};