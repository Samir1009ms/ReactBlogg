import style from "./design/style.module.css"


export function Blogcont(props) {
  return (
    <div className={style.containerTop}>
      <div className={style.blogImg}>
        <img src={props.img} alt="" />
      </div>
      <div className={style.blogInfo}>
        <p className={style.blogText}>{props.children[0]}</p>
        <p className={style.blogTxt}>{props.children[1]}</p>
      </div>
    </div>
  );
}
