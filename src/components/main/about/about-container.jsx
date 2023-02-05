import style from "./design/style.module.css"

export function Container (props){

return(
        <p className={style[props.class]}> {props.children}</p>
    )
}