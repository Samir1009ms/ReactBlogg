export function Rcont(props){

    return(
       <div className="table">
         <p className="date">{props.date}</p>
        <div className={props.class}>
            <p className={props.p1}>{props.text}</p>
            <p className={props.p2}>{props.children}</p>
        </div>
       </div>
        )
}