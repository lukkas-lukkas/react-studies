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
    console.log('TASK_SELECTED', taskSelected);
    setTaskSelected(taskSelected);
  }

  return (
    <div className="AppStyle">
      <Form setTasks={setTasks}/>
      <List tasks={tasks} selectTask={selectTask}/>
      <Timer />
    </div>
  );
}

export default App;
