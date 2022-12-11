import { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import Cronometro from '../components/Cronometro';

import style from './App.module.scss';
import ITask from '../types/tasks';

function App() {
  const [tasks, setTask] = useState<ITask[]>([]);
  const [selected, setSelected] = useState<ITask>();

  function selectTask(selectedTask:ITask){

    setSelected(selectedTask);
    setTask((prevTasks) => prevTasks.map(task => (
      {...task, selected: task.id === selectedTask.id}
    )));

  }

  function finishTask(){

    if(selected){
      setSelected(undefined);
      setTask(prevState => prevState.map(task => {
          return {
            ...task,
            selected: false,
            done: task.done || (task.id === selected.id),
          }
      })
      )

    }

  }

  return (
    <div className={style.AppStyle}>
        <Form setTask={setTask}/>
        <List tasks={tasks} selectTask={selectTask}/>
        <Cronometro selected={selected} finishTask={finishTask}/>
    </div>
  );
}

export default App;
