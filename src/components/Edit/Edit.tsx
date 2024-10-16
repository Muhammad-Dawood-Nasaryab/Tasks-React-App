import { useForm } from "react-hook-form";
import { useTheme } from "../../hooks/useTheme";
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
  const prevTitle = title;
  const { isDarkMode } = useTheme();
  const prevDesc = desc;
  const { 
    register, 
    handleSubmit, 
    formState: {errors} 
  } = useForm<{ title: string, desc: string, }>({
    defaultValues: {
      title: title,
      desc: desc,
    }
  });

  console.log(errors);

  function handleSave(data: { title: string; desc: string; }) {
    const { title, desc } = data;
    if (title.trim() && desc.trim()) {
      onSave({ title: title, desc: desc });
    };
  };

  function cancelSave() {
    onSave({ title: prevTitle, desc: prevDesc });
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit(handleSave)();
    };
  };

  return (
    <div className={ styles.container }>
      <form className={ isDarkMode ? styles.darkform : styles.lightform } onSubmit={ handleSubmit(handleSave) }>
        <h2>Edit Task</h2>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          { ...register("title", { required: "Title is required", maxLength: {
            value: 50,
            message: "Title is required and cannot exceed 50 characters."
          } }) }
          className={ styles.titleField }
          onKeyUp={ handleKeyPress }
          placeholder="Title"
        />
        <label htmlFor="desc">Description:</label>
        <textarea
          rows={ 5 }
          { ...register("desc", { required: true }) }
          className={ styles.descField }
          placeholder="Description"
        />
        <div className={ styles.buttons }>
          <input 
            className={ isDarkMode ? styles.darkbtn :styles.lightbtn }
            type="submit"
            value="Save Changes"
          />
          <input 
            className={ isDarkMode ? styles.darkbtn :styles.lightbtn } 
            type="button" 
            value="Cancel" 
            onClick={ cancelSave }
          />
        </div>
      </form>
    </div>
  );
};

export default Edit;