import { Buton } from "./button-container";

export function Button(props) {
  return (
    <div className={props.class}>
      <Buton class="btn1">About me</Buton>
      <Buton class="btn2">😮 Let’s see portfolios</Buton>
    </div>
  );
}
