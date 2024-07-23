import { useEffect, useState } from "react";
import Todo from "./components/todo";
import { addTodo, getAllTodo, updateTodo, deleteTodo } from "./utils/handleApi";

function App() {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const [id, setId] = useState(null);

  useEffect(() => {
    getAllTodo(setTodo);
  }, []);

  const updateMode = (_id, text) => {
    setIsUpdate(true);
    setText(text);
    setId(_id);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Todo App</h1>
        <div className="main">
          <input
            placeholder="Write Todo's"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <div
            className="add"
            onClick={
              isUpdate
                ? () => updateTodo(id, text, setText, setTodo, setIsUpdate)
                : () => addTodo(text, setText, setTodo)
            }
          >
            {isUpdate ? "Update" : "Add"}
          </div>
        </div>

        <div className="list">
          {Array.isArray(todo) &&
            todo.map((item) => (
              <Todo
                key={item._id}
                text={item.text}
                updateMode={() => updateMode(item._id, item.text)}
                deleteMode={() => deleteTodo(item._id, item.text, setTodo)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
