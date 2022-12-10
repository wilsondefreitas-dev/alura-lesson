import Button from "../Button";
import Timer from "./Timer";

import style from "./Cronometro.module.scss"

const Cronometro = () => {
    
    return(

        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Timer/>
            </div>
            <Button>Começar</Button>
        </div>

    )

}

export default Cronometro;