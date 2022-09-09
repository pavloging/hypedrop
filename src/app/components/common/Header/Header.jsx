import { Link } from "react-router-dom";
import icon__vk from "../../../assets/header/icon__vk.svg";
import icon__tg from "../../../assets/header/icon__tg.svg";
import icon__steam from "../../../assets/header/steam.svg";
import icon__chat from "../../../assets/header/chat.svg";

export default function Header() {
  return (
    <div className="header">
      <div className="header__info">
        <div className="header__text">
          <Link to={"/faq"} className="header__text-link">
            FAQ
          </Link>
        </div>
        <div className="header__text">
          <Link to={"/streamer"} className="header__text-link">
            Стримерская
          </Link>
        </div>
        <div className="header__text">
          <Link to={"/controls"} className="header__text-link">
            Управление
          </Link>
        </div>
        <div className="header__text">
          <a
            href="https://vk.com/hypdrop"
            target="_blank"
            className="header__text-link"
            rel="noreferrer"
          >
            <img className="header__icon-vk" src={icon__vk} alt="vk" />
            <span className="header__text-follow">4134</span>
          </a>
        </div>
        <div className="header__text">
          <a
            href="https://t.me/Mr_Gavara1"
            target="_blank"
            className="header__text-link"
            rel="noreferrer"
          >
            <img className="header__icon-tg" src={icon__tg} alt="telegram" />
            <span className="header__text-follow">6443</span>
          </a>
        </div>
      </div>
      <div className="header__menu">
        <a
          href="https://steamcommunity.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="header__steam">
            <img className="header__steam-img" src={icon__steam} alt="" />
          </div>
        </a>

        <div className="header__chat">
          <img className="header__chat-img" src={icon__chat} alt="" />
        </div>
      </div>
    </div>
  );
}
