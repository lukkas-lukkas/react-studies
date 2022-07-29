import { useState } from 'react';
import './style.scss';
import Task from './Task';

export default function List() {
    const defaultState = [
        {
            name: 'React',
            time: '02:00:00',
        },
        {
            name: 'Javascript',
            time: '02:00:00',
        },
        {
            name: 'Typescript',
            time: '05:00:00',
        }
    ];

    const [tasks, setTasks] = useState(defaultState);

    const addTask = () => {
        setTasks([...tasks, {
            name: 'new task',
            time: '01:00:00',
        }])
    }

    return (
        <aside className='taskList'>
            <h2 onClick={addTask} > Studies today </h2>
            <ul>
                {tasks.map((item, index) => (
                    <Task name={item.name} time={item.time} />
                ))}
            </ul>
        </aside>
    )
}
