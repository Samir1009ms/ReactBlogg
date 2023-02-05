import { Link } from "react-router-dom";
import { useState } from "react";

export function List(props) {
  

  const [isHover, setIsHover] = useState(false);

  const active = () => {
    setIsHover(true);
  };

  const deactive = () => {
    setIsHover(false);
  };

  const getTextColor = () => {
    if (isHover) {
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
    <li name={props.nav} className="list-text">
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
