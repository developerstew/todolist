import Head from 'next/head';
import { nanoid } from 'nanoid';
import { useState, useRef, useEffect } from 'react';

export default function Home() {
  const [formData, setFormData] = useState('');
  const [todos, setTodo] = useState([]);
  const [alert, setAlert] = useState('');

  const inputRef = useRef();

  // Checks to see if any todos have been saved and loads them
  useEffect(() => {
    const data = localStorage.getItem('todos');
    if (data) {
      setTodo(JSON.parse(data));
    }
  }, []);
  // Saves any changes made with todos to locastorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  });

  const addTodo = (e) => {
    e.preventDefault();
    if (formData.length === 0) {
      setAlert('You cannot save empty todo!');

      setTimeout(() => {
        setAlert('');
      }, 3000);
    } else {
      const label = inputRef.current;
      setTodo([
        ...todos,
        {
          id: nanoid(6),
          title: formData,
          completed: false,
          edit: false,
        },
      ]);
      setFormData('');
      label.value = '';
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  };
  const removeTodo = (id) => {
    setTodo(todos.filter((todo) => todo.id !== id));
    setAlert('Successfully Removed!');
    setTimeout(() => {
      setAlert('');
    }, 3000);
  };

  // Edit whether to do is in edit mode or not to affect how todo gets displayed
  const setTodoEditStatus = (id, title) => {
    setTodo(
      todos.map((todo) => (todo.id === id ? { ...todo, edit: true } : todo))
    );
    setFormData(title);
  };
  // Actual editing of todo
  const editTodo = (id) => {
    console.log(formData.length);
    if (formData.length === 0) {
      setAlert('You cannot save empty todo!');
      setInterval(() => {
        setAlert('');
      }, 3000);
    } else {
      setTodo(
        todos.map((todo) =>
          todo.id === id ? { ...todo, title: formData, edit: false } : todo
        )
      );
    }
  };
  // Allows changing todo to completed or not
  const todoCompletedStatus = (id, completed) => {
    setTodo(
      todos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );
  };
  return (
    <div className='container'>
      <h1 id='header'>To Do List</h1>
      {todos.length > 0 ? (
        <p>Number of todos: {todos.length}</p>
      ) : (
        <p>You have nothing in your todo list</p>
      )}
      <form action='submit' className='createToDo' onSubmit={(e) => addTodo(e)}>
        <input
          id='todoInput'
          type='text'
          ref={inputRef}
          onChange={(e) => setFormData(e.target.value)}
          placeholder='Enter new To do'
        />
        <button id='createNewButton' type='submit'>
          Create new
        </button>
      </form>
      <p id='alertPlaceholder'>{alert}</p>
      <div id='toDoPlaceholder'>
        <ul>
          {todos.map((todo) => {
            if (todo.edit) {
              return (
                <li key={todo.id}>
                  <div>
                    <input
                      className='checkbox '
                      type='checkbox'
                      checked={todo.completed}
                      onChange={({ target }) =>
                        todoCompletedStatus(todo.id, target.checked)
                      }
                    />
                  </div>
                  <div>
                    <input
                      type='text'
                      value={formData}
                      onChange={(e) => setFormData(e.target.value)}
                      id='editTodoInput'
                    />
                  </div>

                  <div>
                    <button
                      onClick={(e) => editTodo(todo.id, formData)}
                      className='liButtons '
                    >
                      Save
                    </button>
                    <button
                      onClick={(e) => removeTodo(todo.id)}
                      className='liButtons '
                    >
                      X
                    </button>
                  </div>
                </li>
              );
            }
            return (
              <li key={todo.id}>
                <div className='items1'>
                  <input
                    className='checkbox '
                    type='checkbox'
                    checked={todo.completed}
                    onChange={({ target }) =>
                      todoCompletedStatus(todo.id, target.checked)
                    }
                  />
                </div>
                <div>
                  <p className='addedTodoText'>{todo.title}</p>
                </div>
                <div>
                  <button
                    onClick={(e) => setTodoEditStatus(todo.id, todo.title)}
                    className='liButtons '
                  >
                    Edit
                  </button>
                  <button
                    onClick={(e) => removeTodo(todo.id, todo.title)}
                    className='liButtons '
                  >
                    X
                  </button>
                </div>
              </li>
            );
          })}
        </ul>{' '}
      </div>
      <style jsx>{`
        @media screen and (max-width: 500px) {
          li {
            font-size: 1rem;
            padding: 0px;
            margin: 0;
            display: grid;
            grid-template-columns: auto auto auto;
            width: 100%;
         
          }
          ul {
            display:block
            list-style: none;
            padding: 0px;
            width: 100%;
            display: grid;
            grid-template-columns: auto;
          }
          p {
            font-size: 1rem;
            color: white;
          }
          .checkbox {
            vertical-align: middle;
            margin: 0;
          }

          .liButtons {
            background-color: white;
            height: 5%;
            padding: 0px;
          }
          #editTodoInput {
            height: 10%;
            width: 5px;
          }
          #createNewButton {
            background-color: white;
          }
          #createNewButton:hover {
            height: 5%;
            width: 40%;
            background-color: white;
          }
          .items1 {
            display: flex;
          }
        }
        #alertPlaceholder {
          color: red;
        }
        #todoInput {
          padding: 1.5rem;
          border-radius: 10px;
          display: block;
          margin: 0 auto;
          width: 60%;
          margin-bottom: 1rem;
        }
        #toDoPlaceholder {
          display: block;
          width: 100%;
        }
        #editTodoInput {
          padding: 1rem;
          width: 100%;
        }
        .checkbox {
          width: 2rem;
          height: 2rem;
          vertical-align: middle;
          margin-left: 2rem;
        }
        .items1 {
          display: flex;
        }
        #createNewButton {
          background-color: white;
          padding: 1rem;
          margin-bottom: 3rem
        }
        #createNewButton:hover {
          background-color: #3fe0d0;
          padding: 1.2rem;
        }
        .liButtons {
          background-color: white;
          padding: 1rem;
        }
        .addedTodoText {
          color: black;
          margin: 0;
        }
      `}</style>

      <style jsx global>
        {`
          body {
            background-color: #db6581;
            margin: 0;
            padding: 0;
            font-size: 18px;
            font-weight: 400;
            line-height: 1.8;
            color: #333;
            font-family: sans-serif;
            height: 100%;
            width: 100%;
            position: absolute;
          }
          #header {
            color: #73b0b4;
            transform: scale(1.5);
            padding: 2rem;
          }

          .container {
            display: block;
            text-align: center;
          }
          p {
            font-size: 2rem;
            color: white
          }
          li {
            font-size: 2rem;
            padding: 2px;
            display: grid;
            grid-template-columns: 32.5% 35% 32.5%;
            grid-gap: 1rem
          }
          ul {
            list-style: none;
            padding: 0px;
            padding-bottom: 4rem;
            width: 100%;
            display: grid;
            grid-template-columns: auto
            grid-gap: 10px;
            
          }
        `}
      </style>
    </div>
  );
}
