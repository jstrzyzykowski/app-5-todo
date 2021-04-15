import React from 'react';
import './Empty.css';

const Empty = () => {
  return (
    <div className='empty'>
      <i class="fas fa-list-alt"></i>
      <p className='empty__text-title'>List is empty</p>
      <p className='empty__text-desc'>Add some todos to make this list even cool</p>
    </div>
  );
}

export default Empty;