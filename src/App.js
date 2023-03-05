import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { todoState, _todoCategory } from "./recoil/todoState";
import "./scss/main.css";

function App() {
  const [todo, setTodo] = useRecoilState(todoState);
  const todoCategory = useRecoilValue(_todoCategory);
  console.log("todoCategory: ", todoCategory);

  const [text, setText] = useState("");

  const addTodoHandler = () => {
    setTodo((prev) => [
      ...prev,
      {
        id: Date.now(),
        text,
        category: "TODO",
      },
    ]);
    setText("");
  };

  const todoCategoryHandler = (todos, updatedState) => {
    setTodo((prev) =>
      prev.map((value) => {
        if (value.id === todos.id) {
          return { text: todos.text, id: todos.id, category: updatedState };
        }
        return value;
      })
    );
  };

  return (
    <div className="body">
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
          todo.map((value, index) => (
            <div key={index}>
              {value.text}
              {value.category === "TODO" && (
                <button
                  onClick={() => {
                    todoCategoryHandler(value, "DONE");
                  }}
                >
                  완료!
                </button>
              )}
              {value.category === "DONE" && (
                <button
                  onClick={() => {
                    todoCategoryHandler(value, "TODO");
                  }}
                >
                  완료취소
                </button>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
