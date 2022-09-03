import { Link } from "react-router-dom";

import logo__hypedrop from "../../../assets/aside/logo.svg";
import icon__home from "../../../assets/aside/icon__home.svg";
import icon__streamers from "../../../assets/aside/icon__streamers.svg";
import icon__store from "../../../assets/aside/icon__store.svg";
import icon__promo from "../../../assets/aside/icon__promo.svg";

export default function Aside() {
  return (
    <div className="aside">
      <div className="aside__all-icons">
        <div className="aside__icon">
          <Link to={"/home"} className="aside__link-logo">
            <img className="aside__img-logo" src={logo__hypedrop} alt="logo" />
          </Link>
        </div>

        <div className="aside__icon">
          <Link to={"/home"} className="aside__link">
            <img className="aside__img" src={icon__home} alt="home" />
            <div className="aside__title">Главная</div>
          </Link>
        </div>
        <div className="aside__icon">
          <Link to={"/streamers"} className="aside__link">
            <img className="aside__img" src={icon__streamers} alt="streamers" />
            <div className="aside__title">Стримы</div>
          </Link>
        </div>
        <div className="aside__icon">
          <Link to={"/store"} className="aside__link">
            <img
              className="aside__img"
              style={{ width: "45px" }}
              src={icon__store}
              alt="store"
            />
            <div className="aside__title">Магазин</div>
          </Link>
        </div>
        <div className="aside__icon">
          <Link to={"/promo"} className="aside__link">
            <img className="aside__img" src={icon__promo} alt="promo" />
            <div className="aside__title">Промокоды</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
