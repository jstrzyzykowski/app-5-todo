import React, { createContext, useEffect, useReducer } from 'react';

// ADD - Add new Todo to list
// TOGGLE - Toggle Todo flag between active and finished
// EDIT - Allow to edit Todos title (Todo must be active)
// REMOVE - Remove Todo from list
// REMOVE_ALL - Remove all todos

export const ACTIONS = {
  ADD: 'add',
  TOGGLE: 'toggle',
  EDIT: 'edit',
  REMOVE: 'remove',
  REMOVE_ALL: 'remove-all',
};

export const AppContext = createContext();

const initialState = [];

const initializer = (initialValue = initialState) =>
JSON.parse(localStorage.getItem("localTodos")) || initialValue;

const AppProvider = ({ children }) => {

  const reducer = (todos, action) => {
    switch (action.type) {
      case ACTIONS.ADD:
        return [...todos, createTodo(action.payload.name)];
      case ACTIONS.EDIT:
        if(!action.payload.finished) {
          const editedName = prompt('Enter new todo name', `Edited ${action.payload.name}`);
          if(editedName !== null && editedName.trim() !== '') return todos.map((todo) => {
            if(todo.id === action.payload.id) return { ...todo, name: editedName};
            return todo;
          });
          return todos;
        }
        return todos;
      case ACTIONS.TOGGLE:
        return todos.map((todo) => {
          if(todo.id === action.payload.id) return { ...todo, finished: !todo.finished };
          return todo;
        });
      case ACTIONS.REMOVE:
        return todos.filter((todo) => todo.id !== action.payload.id);
      case ACTIONS.REMOVE_ALL:
        return [];
      default:
        return todos;
    }
  };

  const createTodo = (name) => {
    return { id: Date.now(), name: name, finished: false};
  };

  const [todos, dispatch] = useReducer(reducer, [], initializer);

  useEffect(() => {
    localStorage.setItem("localTodos", JSON.stringify(todos));
  }, [todos]);

  return (
    <AppContext.Provider value={{
      dispatch,
      todos
    }}>
      { children }
    </AppContext.Provider>
  );
};

export default AppProvider;