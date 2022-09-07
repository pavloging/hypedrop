import RequestManager from "../../../../api/RequestManager";
import trovo from "../../../../assets/home/etc/trovo-colored.svg";
import twitch from "../../../../assets/home/etc/twitch-colored.svg";
import youtube from "../../../../assets/home/etc/youtube-colored.svg";

export default function PeopleStreamers() {
  const streamers = RequestManager("get", "streamers", null);

  function validateLive(streamer) {
    return Object.values(streamer.platforms).some((platform) => platform.live);
  }

  return streamers ? (
    <>
      <div className="people-streamers">
        <div className="people-streamers__box-input">
          <input
            className="people-streamers__input"
            placeholder="Поиск по нику"
            type="text"
          />
        </div>

        <div className="people-streamers__1">
          <div className="people-streamers__2">
            <div className="people-streamers__3">
              <span className="people-streamers__4">Стримы</span>
            </div>
          </div>
          <div className="people-streamers__2">
            <div className="people-streamers__3">
              <span className="people-streamers__4">Стримеры</span>
            </div>
          </div>
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
                  validateLive(el)
                    ? "people-streamers__button-active"
                    : "people-streamers__button"
                }
              >
                {validateLive(el) ? "В сети" : "Не в сети"}
              </button>
              {/* </Link> */}
            </div>
          ))}
        </div>
      </div>
    </>
  ) : (
    <div className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
