import React from 'react';
import Button from '../Button';
import './style.scss';

class Form extends React.Component {
  state = {
    task: '',
    time: '00:00',
  };

  addTask(event: React.FormEvent) {
    event.preventDefault();
    console.log('STATE: ', this.state);
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
        <Button text='Create' />
      </form>
    )
  }
}

export default Form;
