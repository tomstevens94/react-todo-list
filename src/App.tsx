import React from 'react';
import ToDoList from './components/ToDoList';

const App: React.FC = () => {
  return (
    <div className='page-container'>
      <div className='list-card-container'>
        <h1>Tom's To Do List</h1>
        <ToDoList />
      </div>
    </div>
  );
}

export default App;
