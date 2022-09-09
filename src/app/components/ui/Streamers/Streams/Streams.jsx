import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RequestManager from "../../../../api/RequestManager";
import eye from "../../../../assets/streamers/eye.svg";

export default function Streams() {
  const [streamsData, setStreamsData] = useState();

  // Загрузка с backend...
  const [streams, setStreams] = useState();

  const loadData = async () => {
    const resp = await RequestManager("GET", "videos");
    setStreams(resp);
    setStreamsData(resp);
  };

  useEffect(() => {
    if (!streams) loadData();
  }, [streams]);
  // Загрузка с backend...

  const validateUrl404 = {
    first:
      "https://yt3.ggpht.com/c6rlBx6A8XUGLyc4KrOu-mw2j86O2HA-ECbYkdZF7s_pVcwKiUWAn1B8V2Vq9DbEq2PosgZ0=s240-c-k-c0x00ffffff-no-rj",
    last: "https://yt3.ggpht.com/ytc/AMLnZu_hXUZxaygYSvGO743iFxfuQ4kHUt0Acro6bwyefg=s240-c-k-c0x00ffffff-no-rj",
  };

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

  function filterValue(value) {
    if (value.length === 0) {
      setStreams(streamsData);
    } else {
      const filter = streamsData.filter((el) =>
        el.title.toLowerCase().includes(value.toLowerCase())
      );
      setStreams(filter);
    }
  }

  return streams ? (
    <div className="stream">
      {/* <h1>Streams</h1> */}
      <div className="people-streamers__box-input">
        <input
          className="people-streamers__input"
          placeholder="Поиск по названию"
          onChange={(e) => filterValue(e.target.value)}
          type="text"
        />
      </div>
      <div className="streams">
        {streams.map((el) => (
          <Link to={"/"} className="streams__link" key={el.id}>
            <div className="streams__container">
              <div className="streams__header">
                <img
                  className="streams__avatar"
                  src={
                    el.avatar === validateUrl404.first ||
                    el.avatar === validateUrl404.last
                      ? "https://static-cdn.jtvnw.net/user-default-pictures-uv/ead5c8b2-a4c9-4724-b1dd-9f00b46cbd3d-profile_image-300x300.png"
                      : el.avatar
                  }
                  alt=""
                />
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

              <div className="streams__name">
                <span className="streams__description title">{el.title}</span>
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
