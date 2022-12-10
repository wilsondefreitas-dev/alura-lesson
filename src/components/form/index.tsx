import React from 'react';
import ITask from '../../types/tasks';
import Button from '../Button';

import { v4 as uuidv4 } from 'uuid';

import style from './Form.module.scss';

class Form extends React.Component<{
    setTask:React.Dispatch<React.SetStateAction<ITask[]>>
}>{

    state = { task: "", time: "" };

    addTask = (e:React.FormEvent) => {

        e.preventDefault();
        this.props.setTask((prevState) => [...prevState, {...this.state, selected: false, done: false, id: uuidv4()}]);

        this.setState({ task: "", time: "" });
    }

    render() {
        return (
            <form className={style.novaTarefa} onSubmit={this.addTask}>
                <div className={style.inputContainer}>
                    <label htmlFor="task">Adicione um novo estudo</label>
                    <input type="text" name="task" id="task" placeholder="O que você quer estudar?" required value={this.state.task} onChange={(e) => this.setState({...this.state, task: e.target.value})}/>
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="time">Tempo</label>
                    <input type="time" name="time" id="time" step="1" min="00:00:00" max="12:30:00" required value={this.state.time} onChange={(e) => this.setState({...this.state, time: e.target.value})}/>
                </div>
                <Button type={'submit'}>Adicionar</Button>
            </form>
        )
    }
}

export default Form;