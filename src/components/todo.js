import React from 'react';

function Todo({ todo }) {
  const { id, title, completed } = todo;
  const h1 = <h1>todo-{title}</h1>;
  const text = completed ? <strike>{h1}</strike> : h1;
  return <div data-testid="todo-1">{text}</div>;
}


export default Todo;
