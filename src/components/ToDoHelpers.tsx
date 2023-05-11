import React from 'react';

interface Props {
  handleToggleAllToDos: () => void;
  handleRemoveAllToDos: () => void;
}

const ToDoHelpers: React.FC<Props> = ({
  handleToggleAllToDos,
  handleRemoveAllToDos
}) => {
  return (
    <div className='list-item-container helpers-container'>
      <button 
        onClick={handleToggleAllToDos}
        className='secondary-button red'
      >
        Toggle all
      </button>
      <button 
        onClick={handleRemoveAllToDos}
        className='secondary-button red'
      >
        Remove all
      </button>
    </div>
  );
}

export default ToDoHelpers;