import React from "react";
import TodoItem from "../MyComponents/TodoItem";
const Todos = (props) => {
  let mystyle = {
    minHeight: "70vh",
    margin: "40px auto",
  };
  return (
    <div className="container" my-3 style={mystyle}>
      <h3 className=" my-3">Todos List</h3>
      {/* {props.todos} */}
      {props.todos.length === 0
        ? "No todo to display"
        : props.todos.map((todo) => {
            return (
              <>
                <TodoItem
                  todo={todo}
                  key={todo.sno}
                  onDelete={props.onDelete}
                />
                <hr />
              </>
            );
          })}
    </div>
  );
};

export default Todos;
