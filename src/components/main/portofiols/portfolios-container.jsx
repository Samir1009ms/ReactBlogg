export function Porto(props) {
  let companent = props.list;
  return companent.map((element, index) => (
    <div className="porto-container" key={index}>
      <div className="porto-top">
        <img className="porto-img" src={element.src} alt="" />
      </div>
      <div className="porto-bottom">
        <p className="porto-text" >{element.text}</p>
        <p className="porto-txt">{element.txt}</p>
      </div>
    </div>
  ));
}
