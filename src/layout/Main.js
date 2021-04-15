import React, { useContext, useState } from 'react';

import Todo from '../components/Todo';
import Empty from './Empty';

import { AppContext } from '../context/AppContext';
import { ACTIONS } from '../context/AppContext'; 

import './Main.css';

const Main = () => {
  const [inputText, setInputText] = useState('');
  const { dispatch, todos } = useContext(AppContext);

  const handleChange = (e) => {
    setInputText(e.target.value);
  }

  const handleSubmit = (e) => {
    if(inputText.trim() !== '') {
      e.preventDefault();
      dispatch({ type: ACTIONS.ADD, payload: { name: inputText } });
      setInputText('');
    } else {
      alert('Todo name must not be empty!');
    }
  }

  const todoComponents = todos.map((todo) => {
    return <Todo key={todo.id} todo={todo}/>
  });

  return (
    <div className='main'>
      <div className="main__container">
        <form className='main__form' onSubmit={handleSubmit}>
          <label className='main__form-label'>
            <input className='main__form-input' type="text" value={inputText} onChange={handleChange} placeholder='Write task title...'/>
            <button className='main__form-button' type='submit'>
              <i className="fas fa-plus"></i>
            </button>
          </label>
        </form>
        <div className="main__todos">
          {todoComponents.length > 0 ? todoComponents : <Empty/>}
        </div>
      </div>
    </div>
  );
}

export default Main;