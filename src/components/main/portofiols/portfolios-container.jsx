import style from "./design/style.module.css"

export function Porto(props) {
  let companent = props.list;
  return companent.map((element, index) => (
    <div className={style.portoContainer} key={index}>
      <div className={style.portoTop}>
        <img className={style.portoImg} src={element.src} alt="" />
      </div>
      <div className={style.portoBottom}>
        <p className={style.portoText} >{element.text}</p>
        <p className={style.portoTxt}>{element.txt}</p>
      </div>
    </div>
  ));
}
