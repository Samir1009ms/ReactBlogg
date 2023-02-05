import style from "./design/style.module.css"
export function Text (props){

    return(
        
        <p className= {style[props.class]}>{props.children}</p>
        )
}