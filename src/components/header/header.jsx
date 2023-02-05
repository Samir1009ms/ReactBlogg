import { navlist } from "./s";
import { List } from "./list";
import { useState } from "react";

export function Header(props) {
  const [display, setDisplay] = useState(false);
  const   iconCkick =()=> {
    setDisplay(!display);

    if (display) {
      return "block";

    } else {
      return "none";
    }
  }

    // if(props.width.innerWidth>992){
    // console.log("block")

    
    // }else{
    //   console.log("none")
    
    // }
  
    // console.log(props.width);
  
  

  return (
    <header className="header">
      <ul className="list" onLoad={Header} style={{display: display? "none": "flex" }}>
        {navlist.map((element) => (
          <List
            listSelect={props.list === element}
            listClick={props.listClick}
            nav={element}
          />
        ))}
      </ul>
      {/* mobil list click name  */}
      <div className="mobilList">
        <img
          onClick={iconCkick}
          className="menuIcon"
          src={require("../img/menu-svgrepo-com.svg").default}
          alt=""
        />
        <p className="text"> {props.diff}</p>
      </div>
    </header>
  );
}
