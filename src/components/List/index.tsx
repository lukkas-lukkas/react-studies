import './style.scss';
import Task from './Task';

export default function List() {
    return (
        <aside className='taskList'>
            <h2> Studies today </h2>
            <ul>
                <Task name='React' time='02:00:00' />
                <Task name='Javascript' time='03:00:00' />
            </ul>
        </aside>
    )
}
