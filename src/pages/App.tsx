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

  return (
    <div className={style.AppStyle}>
        <Form setTask={setTask}/>
        <List tasks={tasks} selectTask={selectTask}/>
        <Cronometro/>
    </div>
  );
}

export default App;
