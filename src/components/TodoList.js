import React from "react";

//Import Components
import Todo from './Todo';

const TodoList = ({todos,setTodos,filteredTodos}) => {

    return(
    <div className="todo-container">
      <ul className="todo-list">
          {filteredTodos.map( (todo) => (
              <Todo key={todo.id} text={todo.text}
              todos={todos} setTodos={setTodos} 
              todo = {todo} />
          ))}
      </ul>
    </div>
    );
}

export default TodoList;