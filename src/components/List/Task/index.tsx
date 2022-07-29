import { ITask } from '../../../interfaces/ITask';
import '../style.scss';

export default function Task(props: ITask) {
    return (
        <li className="taskItem">
            <h3>{props.name}</h3>
            <span>{props.time}</span>
        </li>
    )
}
