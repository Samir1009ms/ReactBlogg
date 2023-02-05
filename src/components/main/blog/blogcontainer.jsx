export function Blogcont(props) {
  return (
    <div className="blog-container-top">
      <div className="blog-img">
        <img src={props.img} alt="" />
      </div>
      <div className="blog-info">
        <p className="blog-text">{props.children[0]}</p>
        <p className="blog-txt">{props.children[1]}</p>
      </div>
    </div>
  );
}
