import style from "./design/style.module.css"

export function Porto(props) {
 function cl (event){

  // if(event){
  //   console.log(event.target.text)
  // }
  console.log(event.target)
  // console.log(event.target)
  // console.log(event.target)
  // console.log("sd",event.target.parentNode.src)

  
}


  let companent = props.list;
  return companent.map((element, index) => (
    <div onClick={cl} className={style.portoContainer} key={index}>
      <div className={style.portoTop}>
        <img className={style.portoImg} src={element.src} alt="" />
      </div>
      <div className={style.portoBottom}>
        <p className={style.portoText} >{element.text}</p>
        <p  className={style.portoTxt}>{element.txt}</p>
      </div>
    </div>
  ));
}
