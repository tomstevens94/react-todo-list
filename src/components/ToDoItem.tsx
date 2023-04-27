import React, { useEffect, useRef } from 'react';

interface Props {
  // ref: HTMLInputElement | null;
  title: string;
  completed: boolean;
  handleCheckToDo: () => void;
  handleUpdateToDoName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDeleteToDo: () => void;
}

const ToDoItem: React.FC<Props> = ({
  // ref,
  title,
  completed,
  handleCheckToDo,
  handleUpdateToDoName,
  handleDeleteToDo
}) => {
  const toDoRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    toDoRef.current && toDoRef.current.focus();  
  }, [])
  return (
    <li className='list-item-container'>
      <input
        className='checkbox'
        type='checkbox' 
        checked={completed} 
        onChange={handleCheckToDo}
      />
      <input
        ref={toDoRef}
        className='list-item-title' 
        type='text' 
        value={title} 
        onChange={handleUpdateToDoName} 
        placeholder='Enter title here' 
      />
      <button 
        className='secondary-button'
        onClick={handleDeleteToDo}
      >
        Remove
      </button>
    </li>
  );
}

export default ToDoItem;