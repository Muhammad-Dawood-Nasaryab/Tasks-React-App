import React, { useState } from "react";
import styles from "./TaskCard.module.css";

interface TaskCardProps {
  id: number;
  title: string;
  desc: string;
  editing: boolean;
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}

const TaskCard:React.FC<TaskCardProps> = (props) => {
  const { onDelete, onEdit, id, editing } = props;
  const [isDeleting, setIsDeleting] = useState(false);

  function handleEdit() {
    onEdit(id)
  };

  function handleDelete() {
    setIsDeleting(true);
    setTimeout(() => {
      onDelete(props.id);
      setIsDeleting(false);
    }, 500)
  };

  return (
    <div className=
      {`${styles.card} ${isDeleting ? styles.deleting : ""} ${editing ? styles.editing : ""}`}
    >
      <h3 className={ styles.title }>{ props.title }</h3>
      <p className={ styles.desc }>{ props.desc }</p>
      <div className={ styles.buttons }>
        <button 
          onClick={ handleDelete } 
          className={ styles.btn }>
            Delete
        </button>
        <button
          onClick={ handleEdit }
          className={ styles.btn }>
            Edit
        </button>
      </div>
    </div>
  );
};

export default TaskCard;