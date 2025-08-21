import { useState } from "react";
import styles from "./style.module.css";

export default function TodoForm({ onFormSubmitted }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "") return; 
    onFormSubmitted(title);
    setTitle("");
  };

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={handleSubmit} className={styles.todoForm}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter a task..."
        />
        <button type="submit" disabled={title.trim() === ""}>
          Add
        </button>
      </form>
    </div>
  );
}
