import { navlist } from "./s";
import { List } from "./list";
import { useRef, useState } from "react";
import style from "./design/style.module.css"

export function Header(props) {
  const [display, setDisplay] = useState(false);
  const navRef=useRef()
  const   iconCkick =()=> {
    setDisplay(!display);

    navRef.current.classList.toggle("d")
  }

  
  

  return (
    <header className={style.header}>
      <ul ref={navRef} className={style.list} >
        {navlist.map((element,index) => (
          <List
            listSelect={props.list === element}
            listClick={props.listClick}
            nav={element}
            key={index}
          />
        ))}
      </ul>
      {/* mobil list click name  */}
      <div className={style.mobilList}>
        <img
          onClick={iconCkick}
          className={style.menuIcon}
          src={require("../img/menu-svgrepo-com.svg").default}
          alt=""
        />
        <p className={style.text}> {props.text}</p>
      </div>
    </header>
  );
}
