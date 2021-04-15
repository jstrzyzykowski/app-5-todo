import React, { useContext } from 'react';
import { ACTIONS, AppContext } from '../context/AppContext';

import './Todo.css';

const Todo = ({ todo }) => {

  const { dispatch } = useContext(AppContext);

  const finishIcon = todo.finished ? <i className="far fa-check-square"></i> : <i className="far fa-square"></i>;

  return (
    <div className="todo">
      <p className={`todo__name ${todo.finished ? 'finished' : ''}`}>{todo.name}</p>
      <div className="todo__buttons">
        <button onClick={() => { dispatch({ type: ACTIONS.EDIT, payload: { id: todo.id, name: todo.name, finished: todo.finished } })}}>
          <i className="fas fa-edit"></i>
        </button>
        <button onClick={() => { dispatch({ type: ACTIONS.TOGGLE, payload: { id: todo.id } })}}>
          {finishIcon}
        </button>
        <button onClick={() => { dispatch({ type: ACTIONS.REMOVE, payload: { id: todo.id } })}}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default Todo;