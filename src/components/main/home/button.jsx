import { Buton } from "./button-container";
import style from "./design/style.module.css"


export function Button(props) {
  return (
    <div className={style[props.class]}>
      <Buton link={"/about"} class="btn1">About me</Buton>
      <Buton link={"/portfolios"} class="btn2">😮 Let’s see portfolios</Buton>
    </div>
  );
}
