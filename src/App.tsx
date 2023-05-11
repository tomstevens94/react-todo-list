import React from 'react';
import ToDoList from './components/ToDoList';

const App: React.FC = () => {
  return (
    <div className='page-container'>
      <div className='list-card-container'>
        <h1>Tom's ToDo List</h1>
        <ToDoList />
      </div>
    </div>
  );
}

export default App;
