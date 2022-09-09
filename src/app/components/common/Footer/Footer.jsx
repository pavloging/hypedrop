import { Link } from "react-router-dom";
import logo from "../../../assets/etc/logo.svg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="footer__container">
        <Link to={"/"} className="footer__link">
          <h2 className="footer__li">Главная</h2>
        </Link>
        <Link to={"/streamers"} className="footer__link">
          <li className="footer__li">Стримы</li>
        </Link>
        <Link to={"/store"} className="footer__link">
          <li className="footer__li">Магазин</li>
        </Link>
        <Link to={"/promo"} className="footer__link">
          <li className="footer__li">Промокоды</li>
        </Link>
      </div>
      <div className="footer__container">
        <h2>Дополнительно</h2>
        <Link to={"/streamers"} className="footer__link">
          <li className="footer__li">Личный кабинет</li>
        </Link>
        <Link to={"/store"} className="footer__link">
          <li className="footer__li">Статус предмета</li>
        </Link>
        <Link to={"/promo"} className="footer__link">
          <li className="footer__li">FAQ</li>
        </Link>
      </div>
      <div className="footer__container">
        <h2>Информация</h2>
        <Link to={"/streamers"} className="footer__link">
          <li className="footer__li">Политика приватности</li>
        </Link>
        <Link to={"/store"} className="footer__link">
          <li className="footer__li">Условия использования</li>
        </Link>
        <Link to={"/promo"} className="footer__link">
          <li className="footer__li">Политика цен</li>
        </Link>
        <Link to={"/promo"} className="footer__link">
          <li className="footer__li">Политика возврата</li>
        </Link>
      </div>
      <div className="footer__container">{/* <img src="" alt="" /> */}</div>
    </div>
  );
}
