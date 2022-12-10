import Item from './Item';
import style from './List.module.scss';

import ITask from '../../types/tasks';

function List({tasks, selectTask}: {
    tasks:ITask[], selectTask:(selectedTask:ITask) => void
}) {

    return (

        <aside className={style.listaTarefas}>

            <h2>Estudos do dia</h2>
            <ul>
                {
                    tasks.map((data, index) => (
                        <Item {...data} selectTask={selectTask} key={data.id}/>
                    ))
                }
            </ul>
        </aside>

    )

}

export default List;