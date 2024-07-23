import axios from "axios";

const getAllTodo = (setTodo) => {
  axios
    .get("http://localhost:5000/getAll")
    .then(({ data }) => {
      console.log("Data ==>", data);
      setTodo(data);
    })
    .catch((err) => console.log(err));
};

const addTodo = (text, setText, setTodo) => {
  axios
    .post("http://localhost:5000/add", { text })
    .then((data) => {
      console.log(data);
      setText("");
      getAllTodo(setTodo);
    })
    .catch((err) => console.log(err));
};

const updateTodo = (id, text, setText, setTodo, setIsUpdate) => {
  axios
    .put(`http://localhost:5000/${id}`, { text })
    .then((data) => {
      console.log(data);
      setText("");
      setIsUpdate(false);
      getAllTodo(setTodo);
    })
    .catch((err) => console.log(err));
};

const deleteTodo = (id, text, setTodo) => {
  axios.delete(`http://localhost:5000/${id}`, { text }).then((data) => {
    console.log(data);
    getAllTodo(setTodo);
  });
};
export { getAllTodo, addTodo, updateTodo, deleteTodo };
