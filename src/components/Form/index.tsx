import React from 'react';
import { ITask } from '../../interfaces/ITask';
import Button from '../Button';
import './style.scss';

class Form extends React.Component<{
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}> {
  state = {
    task: '',
    time: '00:00',
  };

  addTask(event: React.FormEvent) {
    event.preventDefault();
    
    const task: ITask = {
      name: this.state.task,
      time: this.state.time,
    };

    this.props.setTasks(tasks => [...tasks, task]);
  }

  render() {
    return (
      <form className='formNewTask' onSubmit={this.addTask.bind(this)}>
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
            value={this.state.task}
            onChange={event => this.setState({...this.state, task: event.target.value})}
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
            value={this.state.time}
            onChange={event => this.setState({...this.state, time: event.target.value})}
          />
        </div>
        <Button text='Create' type='submit' />
      </form>
    )
  }
}

export default Form;
