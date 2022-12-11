import style from './Button.module.scss';

function Button({children, type, onClick}: {children:React.ReactNode, type?:"button" | "submit" | "reset" | undefined, onClick?:() => void}){
    return(
        <button type={type} className={style.botao} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;