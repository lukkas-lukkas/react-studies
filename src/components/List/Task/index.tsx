import { ITask } from '../../../interfaces/ITask';
import '../style.scss';

export default function Task({task, selectTask}: { task: ITask, selectTask: (taskSelected: ITask) => void }) {

    function selectTaskAction() {
        selectTask(task);
    }

    return (
        <li className="taskItem" onClick={selectTaskAction}>
            <h3>{task.name}</h3>
            <span>{task.time}</span>
        </li>
    )
}
