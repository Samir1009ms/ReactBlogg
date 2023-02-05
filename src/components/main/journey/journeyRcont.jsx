import style from "./design/style.module.css"

export function Rcont(props){

    return(
       <div className={style.table}>
         <p className={style.date}>{props.date}</p>
        <div className={style[props.class]}>
            <p className={style[props.p1]}>{props.text}</p>
            <p className={style[props.p2]}>{props.children}</p>
        </div>
       </div>
        )
}