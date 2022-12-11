import style from './Timer.module.scss';

const Timer = ({time = 0}:{time:number | undefined}) => {

    const minutes = String(Math.floor(time / 60));
    const seconds = String(time % 60);

    const [minTen, minUnity] = minutes.padStart(2, "0");
    const [secTen, secUnity] = seconds.padStart(2, "0");

    return(
        <>
            <span className={style.relogioNumero}>{minTen}</span>
            <span className={style.relogioNumero}>{minUnity}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{secTen}</span>
            <span className={style.relogioNumero}>{secUnity}</span>
        </>
    )

}

export default Timer;