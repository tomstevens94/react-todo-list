import { useState } from 'react';
import '../styles.css';
import React from 'react';
import Helpers from './Helpers';
import AddRemoveButtons from './AddRemoveButtons';
import ToDoItem from './ToDoItem';

interface ToDo {
  title: string;
  completed: boolean;
}

function ToDoList() {
  const [toDos, setToDos] = useState<ToDo[]>([]);

  const handleCheckToDo = (index: number) => {
    setToDos(prev => prev.map((toDo, i) => {
      if (index !== i) {
        return toDo;
      } else {
        let updatedToDo = {
          ...toDo,
          completed: !toDo.completed
        };
        return updatedToDo as ToDo;
      }
    }));
  }

  const handleUpdateToDoName = (index: number, value: string) => {
    const updatedToDos = toDos.map((toDo, i) => {
      if (index !== i) {
        return toDo;
      } else {
        let updatedToDo = toDo;
        updatedToDo.title = value;
        return updatedToDo;
      }
    });

    setToDos(updatedToDos);
  }

  const handleDeleteCompleted = () => {
    setToDos(prev => (prev.filter(toDo => !toDo.completed)));
  };

  const handleAddToDo = () => {
    setToDos(prev => ([
      ...prev,
      {
        title: '',
        completed: false
      }
    ]))
  }

  const handleDeleteTodo = (index: number) => {
    setToDos(prev => prev.filter((_, i) => index !== i));
  };

  const handleDeleteAllToDos = () => {
    setToDos([]);
  };

  const handleToggleAllToDos = () => {
    const anyAreCompleted = toDos.some(toDo => toDo.completed);

    setToDos(prev => prev.map(toDo => ({...toDo, completed: !anyAreCompleted})))
  }

  return (
    <>
      <ul className='list-container'>
        {toDos.length > 0 ? (
          toDos.map((toDo, index, a) => (
            <ToDoItem
              {...toDo}
              handleCheckToDo={() => handleCheckToDo(index)}
              handleUpdateToDoName={(e: React.ChangeEvent<HTMLInputElement>
                ) => handleUpdateToDoName(index, e.target.value)}
              handleDeleteToDo={() => handleDeleteTodo(index)}
              key={index}
            />
          )))
         : <h2 className='empty-header'>You don't have any ToDo's. Press the button below to add one</h2>}
          {toDos.length > 0 ? (
            <Helpers
              toggleAllChecked={toDos.some(toDo => toDo.completed)}
              handleRemoveAllToDos={handleDeleteAllToDos}
              handleToggleAllToDos={handleToggleAllToDos}
            />
          ) : null}
      </ul>
      <AddRemoveButtons
        handleAddToDo={handleAddToDo}
        handleDeleteCompleted={handleDeleteCompleted}
      />
    </>
  );
}

export default ToDoList;