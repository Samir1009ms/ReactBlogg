import style from "./design/style.module.css"

export function Div (props){
    // let clas=props.classl
    // console.log(props.classl[1])
    return(
        
        <div className={style[props.class]}>
            <div className={style[props.classl[4]]}>
                <p className={style[props.classl[3]]}>
                    {props.children[0]}
                </p>
                <ul className={style[props.classl[2]]}>
                     <p className={style[props.classl[1]]}> {props.children[1]}</p>
                    <li className={style[props.classl[0]]}> {props.children[2]}</li>
                    <li className={style[props.classl[0]]}> {props.children[3]}</li>
                    <li className={style[props.classl[0]]}> {props.children[4]}</li>
                    <li className={style[props.classl[0]]}> {props.children[5]}</li>
                    <li className={style[props.classl[0]]}> {props.children[6]}</li>
                </ul>
            </div>
        </div>
        )

}