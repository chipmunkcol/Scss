import { useState } from "react";
import { useRecoilState } from "recoil";
import { todoState } from "./recoil/todoState";
import "./scss/main.css";

function App() {
  const [todo, setTodo] = useRecoilState(todoState);
  console.log("todo: ", todo);

  const [text, setText] = useState("");

  const addTodoHandler = () => {
    setTodo((prev) => [...prev, { text }]);
    setText("");
  };

  return (
    <div>
      <h1>scss 연결!</h1>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addTodoHandler();
          }}
        >
          <input
            type={"text"}
            required
            placeholder={"오늘의 todo list는?"}
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <button>저장</button>
        </form>

        <h2>오늘의 Todo!</h2>
        {todo.length > 0 &&
          todo.map((value, index) => <div key={index}>{value.text}</div>)}
      </div>
    </div>
  );
}

export default App;
