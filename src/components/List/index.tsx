import { useState } from 'react';
import { ITask } from '../../interfaces/ITask';
import './style.scss';
import Task from './Task';

export default function List({ tasks }: { tasks: ITask[] }) {
    return (
        <aside className='taskList'>
            <h2> Studies today </h2>
            <ul>
                {tasks.map((item, index) => (
                    <Task name={item.name} time={item.time} key={index}/>
                ))}
            </ul>
        </aside>
    )
}
