import '../style.scss';

export default function Task(props: { name: string, time: string }) {
    return (
        <li className="taskItem">
            <h3>{props.name}</h3>
            <span>{props.time}</span>
        </li>
    )
}
