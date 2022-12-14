import "./feed.css";

// stateless functional component

export function Feed(props) {
  console.log(props);
  return (
    <>
      <div key={props.feed.id}>
        <div className="myUserName">
          <img className="profileImage" src={props.feed.imgUrl} alt="image" />
          <div className="headingText">{props.feed.userName}</div>
        </div>
        <div>{props.feed.msg}</div>
        <img className="contentImage" src={props.feed.imgUrl} alt="image" />
        <br />
        <i className="fa-regular fa-heart myFonts"></i>
        <i className="fa-regular fa-comment myFonts"></i>
        <i className="fa-regular fa-paper-plane myFonts"></i>
        <br />
        <br />
        <br />
      </div>
    </>
  );
}
