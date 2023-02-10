import style from "./design/style.module.css"

let icons = [
  { src: require("../img/git.svg").default },
  { src: require("../img/twitter.svg").default },
  { src: require("../img/topp.svg").default },
];

export function Icon(props) {
  return (
    <div className={style[props.class]} >
      {icons.map((icon,index) => (
        <img key={index} className={style.icon} src={icon.src} alt="" />
      ))}
    </div>
  );
}
