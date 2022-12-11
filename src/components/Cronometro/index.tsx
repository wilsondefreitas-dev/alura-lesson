import { useEffect, useState } from "react";
import Button from "../Button";
import Timer from "./Timer";
import ITask from "../../types/tasks";
import style from "./Cronometro.module.scss"
import timeToSeconds from "../../common/utils/date";

const Cronometro = ({selected, finishTask}: {selected:ITask | undefined, finishTask:() => void}) => {

    const [time, setTime] = useState<number>();

    useEffect(() => {

        if(selected?.time){
            setTime(timeToSeconds(selected?.time));
        }

    }, [selected]);

    function regressive(counter: number = 0){

        setTimeout(() => {
            if(counter > 0){
                setTime(counter - 1);
                return regressive(counter - 1);
            }else{
                finishTask();
            }
        }, 1000);

    }
    
    return(

        <div className={style.cronometro}>
            <p className={style.titulo}>
                Escolha um card e inicie o cronômetro
            </p>
            <div className={style.relogioWrapper}>
                <Timer time={time}/>
            </div>
            <Button onClick={regressive.bind(this, time)}>Começar</Button>
        </div>

    )

}

export default Cronometro;