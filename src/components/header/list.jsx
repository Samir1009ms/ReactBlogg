import { Link } from "react-router-dom";
import { useState } from "react";
import style from "./design/style.module.css"


export function List(props) {
  

  const [hover, setHover] = useState(false);

  const active = () => {
    setHover(true);
  };

  const deactive = () => {
    setHover(false);
  };

  const getTextColor = () => {
    if (hover) {
      return "#ffd000";
    } else {
      if (props.listSelect) {

        return "#ffd000";
      } else {
        return "#fff ";
      }
    }
  };

  return (
    <li name={props.nav} className={style.listText}>
      <Link
        onClick={() => props.listClick(props.nav)}
        onMouseEnter={active}
        onMouseLeave={deactive}
        style={{ color: getTextColor() }}
        to={"/" + props.nav}
      >
        {props.nav}
      </Link>
    </li>
  );
}
