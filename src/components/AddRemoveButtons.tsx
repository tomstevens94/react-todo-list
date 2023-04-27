import React from 'react';

interface Props {
  handleAddToDo: () => void;
  handleDeleteCompleted: () => void;
}

const AddRemoveButtons: React.FC<Props> = ({
  handleAddToDo,
  handleDeleteCompleted
}) => {
  return (
    <div className='button-container'>
      <button className='green' onClick={handleAddToDo}>Add a new ToDo</button>
      <button className='red' onClick={handleDeleteCompleted}>Remove completed</button>
    </div>
  );
}

export default AddRemoveButtons;