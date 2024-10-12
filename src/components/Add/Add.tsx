import { useState } from "react";
import styles from "./Add.module.css";

interface Tasks {
  id: number;
  title: string;
  desc: string;
};

interface AddProps {
  onSubmit: (task: Omit<Tasks, "id">) => void;
};

const Add:React.FC<AddProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  function handleSubmit() {
    if (title && desc) {
      onSubmit({ title, desc });
      setTitle("");
      setDesc("");
    };
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    };
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h2>Add New Task</h2>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          value={ title }
          className={ styles.titleField }
          onChange={ (e) => setTitle(e.target.value) }
          onKeyUp={ handleKeyPress }
          placeholder="Title"
        />
        <label htmlFor="desc">Description:</label>
        <textarea
          rows={5}
          name="desc"
          value={ desc }
          className={ styles.descField }
          onChange={ (e) => setDesc(e.target.value) }
          placeholder="Description"
        />
        <button onClick={ handleSubmit } className={ styles.btn }>Add</button>
      </div>
    </div>
  );
};

export default Add;