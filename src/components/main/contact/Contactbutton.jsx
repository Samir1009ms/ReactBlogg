import { Buton } from "./button-cobtainer";
import style from "./design/style.module.css"


export function Button(props) {
  return (
    <div className={style[props.class]}>
      <Buton class="btn1">About me</Buton>
      <Buton class="btn2">😮 Let’s see portfolios</Buton>
    </div>
  );
}
