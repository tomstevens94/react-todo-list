import React from 'react';

interface Props {
  toggleAllChecked: boolean;
  handleToggleAllToDos: () => void;
  handleRemoveAllToDos: () => void;
}

const Helpers: React.FC<Props> = ({
  toggleAllChecked,
  handleToggleAllToDos,
  handleRemoveAllToDos
}) => {
  return (
    <div className='list-item-container helpers-container'>
      <input
        onChange={handleToggleAllToDos}
        checked={toggleAllChecked}
        className='checkbox'
        type='checkbox' 
      />
      <p>Toggle all</p>
      <button 
        onClick={handleRemoveAllToDos}
        className='secondary-button'
      >
        Remove all
      </button>
    </div>
  );
}

export default Helpers;