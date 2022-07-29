import { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import Timer from '../components/Timer';
import { ITask } from '../interfaces/ITask';
import './style.scss';

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const [taskSelected, setTaskSelected] = useState<ITask>();

  function selectTask(taskSelected: ITask) {
    setTaskSelected(taskSelected);

    setTasks(tasks => tasks.map(task => ({
      ...task,
      selected: task.id === taskSelected.id ? true : false,
    })))
  }

  function finishTask() {
    if (taskSelected) {
      setTaskSelected(undefined);
      setTasks(tasks => tasks.map(task => {
        if (taskSelected.id === task.id) {
          return {
            ...task,
            selected: false,
            completed: true,
          }
        }

        return task;
      }))
    }
  }

  return (
    <div className="AppStyle">
      <Form setTasks={setTasks}/>
      <List tasks={tasks} selectTask={selectTask}/>
      <Timer taskSelected={taskSelected} finishTask={finishTask}/>
    </div>
  );
}

export default App;
