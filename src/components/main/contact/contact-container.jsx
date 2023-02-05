export function Div (props){
    let clas=props.classl
    return(
        
        <div className={props.class}>
            <div className={clas[4]}>
                <p className={clas[3]}>
                    {props.children[0]}
                </p>
                <ul className={clas[2]}>
                     <p className={clas[1]}> {props.children[1]}</p>
                    <li className={clas[0]}> {props.children[2]}</li>
                    <li className={clas[0]}> {props.children[3]}</li>
                    <li className={clas[0]}> {props.children[4]}</li>
                    <li className={clas[0]}> {props.children[5]}</li>
                    <li className={clas[0]}> {props.children[6]}</li>
                </ul>
            </div>
        </div>
        )

}