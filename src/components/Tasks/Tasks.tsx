import React, { Suspense, Profiler } from "react";
import { useTasks } from "../../hooks/useTasks";
import { useModal } from "../../hooks/useModal";
import Modal from "../Modal/Modal";
import Edit from "../Edit/Edit";
import Add from "../Add/Add";
import styles from "./Tasks.module.css";

const TaskList = React.lazy(() => import("../TaskList/TaskList"));

const Tasks = () => {
  const { tasks, addTask, deleteTask, editTask, saveTask } = useTasks();
  const { openModal, closeModal, setModalContent } = useModal();

  const confirmDelete = (id: number) => {
    setModalContent(
      <>
        <h3>Are you sure?</h3>
        <div>
          <button onClick={() => { deleteTask(id); closeModal() }}>Yes</button>
          <button onClick={() => closeModal()}>No</button>
        </div>
      </>
    );
    openModal();
  };

  const onRender = (
    id: string,
    actualDuration: number
  ) => {
    console.log(`Rendered ${id}. Duration: ${actualDuration}ms`);
  };

  const editingTask = tasks.find((task) => task.editing);

  return (
    <Profiler id="Tasks" onRender={ onRender }>
      <div className={ styles.container }>
        <div className={ styles.addOrEdit }>
          { editingTask ? (
            <Edit
              title={ editingTask.title }
              desc={ editingTask.desc }
              onSave={ saveTask }
            />
          ) : (
            <Add onSubmit={ addTask } />
          ) }
        </div>
        <div className={ styles.taskList }>
          <Suspense fallback={ <div>Loading...</div> }>
            <TaskList
              tasks={ tasks }
              onDelete={ (id) => confirmDelete(id) }
              onEdit={ editTask }
            />
          </Suspense>
        </div>
        <Modal />
      </div>
    </Profiler>
  );
};

export default Tasks;
