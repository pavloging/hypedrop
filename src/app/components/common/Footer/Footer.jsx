import { Link } from "react-router-dom";
import logo from "../../../assets/etc/logo.svg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="footer__main">
        <Link to={"/"}>
          <h2>Главная</h2>
        </Link>
        <Link to={"/streamers"}>
          <li>Стримы</li>
        </Link>
        <Link to={"/store"}>
          <li>Магазин</li>
        </Link>
        <Link to={"/promo"}>
          <li>Промокоды</li>
        </Link>
      </div>
      <div className="footer__extra">
        <h2>Дополнительно</h2>
        <Link to={"/streamers"}>
          <li>Личный кабинет</li>
        </Link>
        <Link to={"/store"}>
          <li>Статус предмета</li>
        </Link>
        <Link to={"/promo"}>
          <li>FAQ</li>
        </Link>
      </div>
      <div className="footer__information">
        <h2>Информация</h2>
        <Link to={"/streamers"}>
          <li>Политика приватности</li>
        </Link>
        <Link to={"/store"}>
          <li>Условия использования</li>
        </Link>
        <Link to={"/promo"}>
          <li>Политика цен</li>
        </Link>
        <Link to={"/promo"}>
          <li>Политика возврата</li>
        </Link>
      </div>
      <div className="footer__network">{/* <img src="" alt="" /> */}</div>
    </div>
  );
}
