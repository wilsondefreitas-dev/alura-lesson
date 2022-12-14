import React, {useState} from 'react';
import ITask from '../../types/tasks';
import Button from '../Button';

import { v4 as uuidv4 } from 'uuid';

import style from './Form.module.scss';

function Form ({setTask}: {setTask:React.Dispatch<React.SetStateAction<ITask[]>>}){

    const [task, setTaskName] = useState("");
    const [time, setTime] = useState("00:00:00");

    const addTask = (e:React.FormEvent) => {

        e.preventDefault();
        setTask((prevState) => [...prevState, {task, time, selected: false, done: false, id: uuidv4()}]);

        setTaskName("")
        setTaskName("00:00:00")
    }

    return (
        <form className={style.novaTarefa} onSubmit={addTask}>
            <div className={style.inputContainer}>
                <label htmlFor="task">Adicione um novo estudo</label>
                <input type="text" name="task" id="task" placeholder="O que você quer estudar?" required value={task} onChange={(e) => setTaskName(e.target.value)}/>
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="time">Tempo</label>
                <input type="time" name="time" id="time" step="1" min="00:00:00" max="12:30:00" required value={time} onChange={(e) => setTime(e.target.value)}/>
            </div>
            <Button type={'submit'}>Adicionar</Button>
        </form>
    )

}

export default Form;