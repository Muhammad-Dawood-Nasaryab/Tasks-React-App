import { useState } from "react";
import styles from "./Edit.module.css";

interface Tasks {
  id: number;
  title: string;
  desc: string;
};

interface EditProps {
	title: string;
	desc: string;
  onSave: (task: Omit<Tasks, "id">) => void;
};

const Edit: React.FC<EditProps> = ({ title, desc, onSave }) => {
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedDesc, setUpdatedDesc] = useState(desc);

  function handleSave() {
    if (updatedTitle && updatedDesc) {
      onSave({ title: updatedTitle, desc: updatedDesc });
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSave();
    }
  };

  return (
    <div className={ styles.container }>
      <div className={ styles.form }>
        <h2>Edit Task</h2>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          value={ updatedTitle }
          className={ styles.titleField }
          onChange={ (e) => setUpdatedTitle(e.target.value) }
          onKeyUp={ handleKeyPress }
          placeholder="Title"
        />
        <label htmlFor="desc">Description:</label>
        <textarea
          rows={ 5 }
          name="desc"
          value={ updatedDesc }
          className={ styles.descField }
          onChange={ (e) => setUpdatedDesc(e.target.value) }
          placeholder="Description"
        />
        <button onClick={ handleSave } className={ styles.btn }>
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Edit;