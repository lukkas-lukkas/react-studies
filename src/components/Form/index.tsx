import React, { useState } from 'react';
import { ITask } from '../../interfaces/ITask';
import Button from '../Button';
import './style.scss';

function Form ({ setTasks }: { setTasks: React.Dispatch<React.SetStateAction<ITask[]>> }) {
  const [task, setTask] = useState('');
  const [time, setTime] = useState('00:00');

  function addTask(event: React.FormEvent) {
    event.preventDefault();
    
    const newTask: ITask = {
      name: task,
      time: time,
      selected: false,
      completed: false,
      id: new Date().getTime(),
    };

    setTask('');
    setTime('00:00');

    setTasks(tasks => [...tasks, newTask]);
  }

  return (
    <form className='formNewTask' onSubmit={addTask}>
      <div className='inputContainer'>
        <label htmlFor="task">
          Add new study
        </label>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="What do you want study?"
          required
          value={task}
          onChange={event => setTask(event.target.value )}
        />
      </div>
      <div className='inputContainer'>
        <label htmlFor="time">
          Time
        </label>
        <input
          type="time"
          step="1"
          name="time"
          id="time"
          min="00:00:00"
          max="01:30:00"
          required
          value={time}
          onChange={event => setTime(event.target.value)}
        />
      </div>
      <Button text='Create' type='submit' />
    </form>
  )
}

export default Form;
