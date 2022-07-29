import { ITask } from '../../../interfaces/ITask';
import '../style.scss';

export default function Task({task, selectTask}: { task: ITask, selectTask: (taskSelected: ITask) => void }) {

    function selectTaskAction() {
        !task.completed && selectTask(task);
    }

    return (
        <li 
            className={`
                taskItem 
                ${task.selected ? 'taskItemCompleted' : ''}
                ${task.completed ? 'taskItemCompleted' : ''}
            `} 
            onClick={selectTaskAction}
        >
            <h3>{task.name}</h3>
            <span>{task.time}</span>
            {task.completed && <span className='done' arial-label='task done'></span>}
        </li>
    )
}
