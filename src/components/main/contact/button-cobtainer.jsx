import style from "./design/style.module.css"

export function Buton (props){

    return (
        <button className={style[props.class]}>{props.children}</button>
        )
}