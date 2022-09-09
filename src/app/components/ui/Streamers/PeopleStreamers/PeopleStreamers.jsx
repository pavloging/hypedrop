import { useEffect, useState } from "react";
import RequestManager from "../../../../api/RequestManager";
import trovo from "../../../../assets/home/etc/trovo-colored.svg";
import twitch from "../../../../assets/home/etc/twitch-colored.svg";
import youtube from "../../../../assets/home/etc/youtube-colored.svg";
import getNowStreamersLive from "../../../../utils/getNowStreamersLive";

export default function PeopleStreamers() {
  const [streamersData, setStreamersData] = useState();
  // Загрузка с backend...
  const [streamers, setStreamers] = useState();

  const loadData = async () => {
    const resp = await RequestManager("GET", "streamers", { limit: 48 });
    setStreamers(resp);
    setStreamersData(resp);
  };

  useEffect(() => {
    if (!streamers) loadData();
  }, [streamers]);
  // Загрузка с backend...

  function filterValue(value) {
    if (value.length === 0) {
      setStreamers(streamersData);
    } else {
      const filter = streamersData.filter((el) =>
        el.name.toLowerCase().includes(value.toLowerCase())
      );
      setStreamers(filter);
    }
  }

  return streamers ? (
    <div className="people-streamers">
      <div className="people-streamers__box-input">
        <input
          className="people-streamers__input"
          placeholder="Поиск по нику"
          onChange={(e) => filterValue(e.target.value)}
          type="text"
        />
      </div>

      <div className="people-streamers__container">
        {streamers.map((el) => (
          <div className="people-streamers__card" key={el.id}>
            <img
              className="people-streamers__avatar"
              src={el.platforms.twitch.avatar}
              alt="avatar"
            />
            <h3 className="people-streamers__name">{el.name}</h3>
            <div className="people-streamers__platforms">
              <a
                className="people-streamers__platforms-link"
                href={el.platforms.trovo.link}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="people-streamers__platforms-img"
                  src={trovo}
                  alt="trovo"
                />
              </a>
              <a
                className="people-streamers__platforms-link"
                href={el.platforms.twitch.link}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="people-streamers__platforms-img"
                  src={twitch}
                  alt="twitch"
                />
              </a>
              <a
                className="people-streamers__platforms-link"
                href={el.platforms.youtube.link}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="people-streamers__platforms-img"
                  src={youtube}
                  alt="youtube"
                />
              </a>
            </div>
            {/* <Link to={`/watch/${liveStream}`}> */}
            <button
              className={
                getNowStreamersLive(el)
                  ? "people-streamers__button-active"
                  : "people-streamers__button"
              }
            >
              {getNowStreamersLive(el) ? "В сети" : "Не в сети"}
            </button>
            {/* </Link> */}
          </div>
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
