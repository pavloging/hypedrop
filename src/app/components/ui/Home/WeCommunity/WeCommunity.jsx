import RequestManager from "../../../../api/RequestManager";
import trovo from "../../../../assets/home/etc/trovo-colored.svg";
import twitch from "../../../../assets/home/etc/twitch-colored.svg";
import youtube from "../../../../assets/home/etc/youtube-colored.svg";

export default function WeCommunity() {
  const streamers = RequestManager("get", "streamers", null);

  function validateLive(streamer) {
    return Object.values(streamer.platforms).some((platform) => platform.live);
  }

  return streamers ? (
    <>
      <div className="we-community">
        <h2 className="we-community__title">
          Мы - часть стримеров и трейдеров в одном сообществе
        </h2>
        <div className="we-community__container">
          {streamers.map((el) => (
            <div className="we-community__card" key={el.id}>
              <img
                className="we-community__avatar"
                src={el.platforms.twitch.avatar}
                alt="avatar"
              />
              <h3 className="we-community__name">{el.name}</h3>
              <div className="we-community__platforms">
                <a
                  className="we-community__platforms-link"
                  href={el.platforms.trovo.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="we-community__platforms-img"
                    src={trovo}
                    alt="trovo"
                  />
                </a>
                <a
                  className="we-community__platforms-link"
                  href={el.platforms.twitch.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="we-community__platforms-img"
                    src={twitch}
                    alt="twitch"
                  />
                </a>
                <a
                  className="we-community__platforms-link"
                  href={el.platforms.youtube.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="we-community__platforms-img"
                    src={youtube}
                    alt="youtube"
                  />
                </a>
              </div>
              {/* <Link to={`/watch/${liveStream}`}> */}
              <button
                className={
                  validateLive(el)
                    ? "we-community__button-active"
                    : "we-community__button"
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
