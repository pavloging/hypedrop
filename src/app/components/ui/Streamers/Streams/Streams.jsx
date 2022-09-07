import { Link } from "react-router-dom";
import RequestManager from "../../../../api/RequestManager";
import eye from "../../../../assets/streamers/eye.svg";

export default function Streams() {
  const streams = RequestManager("get", "videos", null);

  if (streams) {
    console.log(streams);
  }

  function data(ms) {
    const dateInMs = ms;
    const date = new Date(dateInMs).toLocaleString("ru", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
    return date.toString();
  }

  return streams ? (
    <div className="streams">
      {/* <h1>Streams</h1> */}
      {streams.map((el) => (
        <Link to={"/"} key={el.id}>
          <div className="streams__container">
            <div className="streams__header">
              <img className="streams__avatar" src={el.avatar} alt="" />
              <div className="streams__text">
                <span className="streams__author">{el.author}</span>
                <span className="streams__description">На {el.from}</span>
                <span className="streams__description">{data(el.date)}</span>
              </div>
              <div className="streams__flex"></div>
              <div className="streams__view">
                <img className="streams__img" src={eye} alt="Просмотров" />
                <span className="streams__view-count">{el.view_count}</span>
              </div>
            </div>
            <div
              className="streams__prevu"
              style={{
                background: `url(${el.thumbnail_url})`,
                backgroundSize: "auto 100%",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
        </Link>
      ))}
    </div>
  ) : (
    <div className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
