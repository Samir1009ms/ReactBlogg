// import { Link } from "react-router-dom"
import style from "./design/style.module.css"


export function Buton (props){

    return (
        <button className={style[props.class]}><a href={props.link}>{props.children}</a></button>
        )
}