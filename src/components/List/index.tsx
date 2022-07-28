import './style.scss';

export default function List() {
    return (
        <aside className='taskList'>
            <h2> Studies today </h2>
            <ul>
                <li className='taskItem'>
                    <h3>
                        React
                    </h3>
                    <span>
                        02:00:00
                    </span>
                </li>
                <li className='taskItem'>
                    <h3>
                        Javascript
                    </h3>
                    <span>
                        01:00:00
                    </span>
                </li>
            </ul>
        </aside>
    )
}
