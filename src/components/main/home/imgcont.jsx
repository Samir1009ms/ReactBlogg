import style from "./design/style.module.css";

export function Img(props) {
  let imgs = props.img;
  return imgs.map((element, index) => (
    <img
      className={style[element.class]}
      src={element.src}
      key={index}
      alt="x"
    />
  ));
}
