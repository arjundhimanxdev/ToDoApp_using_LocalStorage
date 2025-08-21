
import styles from "./style.module.css";
import { WebDatabase } from "../../../../utils/webDatabase";
import { DATABASE_KEYS } from "../../../../constants/database-keys";

export default function TodoList({ todos, setTodos }) {

	const handleChange = (id) => {

		const itemIndex = todos.findIndex((todo) => todo.id === id);
		if(itemIndex === -1){
			console.log("Item not found");
			alert("Item not found");
			return;
		}

		const newTodos = [...todos];

		newTodos[itemIndex].completed = !newTodos[itemIndex].completed;
		setTodos(newTodos);
		WebDatabase.setItem(DATABASE_KEYS.TODOS, newTodos);
	}

	const removeTodo = (id) => {
		setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== id))
	};

  return <>
  <div className={styles.todoDiv}>
  <ul className={styles.todoList}>
    {todos.map((todo) => (
      <li key={todo.id} className={styles.todoItem}>
        <label className={styles.todoLabel}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleChange(todo.id)}
          />
          <span className={todo.completed ? styles.completed : ""}>
            {todo.title}
          </span>
        </label>
        <button
          className={styles.todoListButton}
          onClick={() => removeTodo(todo.id)}
        >
          ✕
        </button>
      </li>
    ))}
  </ul>
  {todos.length === 0 && <p className={styles.emptyText}>No todos found</p>}
</div>

    
  </>;
}	