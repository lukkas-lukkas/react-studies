import { useState } from 'react';
import { ITask } from '../../interfaces/ITask';
import './style.scss';
import Task from './Task';

interface Props {
    tasks: ITask[],
    selectTask: (taskSelected: ITask) => void,
}

export default function List({ tasks, selectTask }: Props) {
    return (
        <aside className='taskList'>
            <h2> Studies today </h2>
            <ul>
                {tasks.map((task) => (
                    <Task task={task} selectTask={selectTask} key={task.id}/>
                ))}
            </ul>
        </aside>
    )
}
