import ITask from '../../../types/tasks';
import style from '../List.module.scss';

interface Props extends ITask{
    selectTask:(selectedTask:ITask) => void
}

function Item({task, time, selected, done, id, selectTask}: Props){
    return(
        <li className={`${style.item} ${selected ? style.itemSelecionado : ''}`} onClick={() => selectTask({task, time, selected, done, id})}>
            <h3>{task}</h3>
            <span>{time}</span>
        </li>
    )
}

export default Item;