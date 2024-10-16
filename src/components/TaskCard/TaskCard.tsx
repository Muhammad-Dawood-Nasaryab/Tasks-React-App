import React, { useState } from "react";
import styles from "./TaskCard.module.css";
import { useTheme } from "../../hooks/useTheme";

interface TaskCardProps {
  id: number;
  title: string;
  desc: string;
  editing: boolean;
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ id, title, desc, editing, onDelete, onEdit }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const { isDarkMode } = useTheme();

  const handleDelete = () => {
    setIsDeleting(true);
    setTimeout(() => {
      onDelete(id);
      setIsDeleting(false);
    }, 500);
  };

  return (
    <div
      className={`${
        isDarkMode ? styles.darkcard : styles.lightcard
      } ${isDeleting ? styles.deleting : ""} ${
        editing ? styles.editing : ""
      }`}
    >
      <h3 className={ 
          isDarkMode ? styles.darktitle :styles.lighttitle
        }>{ title }</h3>
      <p className={ 
          isDarkMode ? styles.darkdesc : styles.lightdesc
        }>{ desc }</p>
      <div className={ styles.buttons }>
        <button onClick={ handleDelete } className={ 
          isDarkMode ? styles.darkbtn : styles.lightbtn }>
            Delete
        </button>
        <button onClick={ () => onEdit(id) } className={ 
          isDarkMode ? styles.darkbtn : styles.lightbtn }>
            Edit
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
