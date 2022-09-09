import plus from "../../../../assets/etc/plus.svg";
import coin from "../../../../assets/etc/coin.svg";

export default function InputPromo() {
  return (
    <div className="input-promo">
      <h1 className="input-promo__title-active">Активируй промокод!</h1>
      <div className="input-promo__container">
        <img className="input-promo__coin" src={coin} alt="" />
        <div className="input-promo__text">
          <h2 className="input-promo__title">Прокачай баланс</h2>
          <span className="input-promo__span">
            Введи промокод и получи бонус!
          </span>
        </div>
        <div className="input-promo__activate">
          <input
            className="input-promo__input"
            type="text"
            placeholder="Промокод"
          />
          <button className="input-promo__button">Активировать</button>
        </div>
      </div>

      <h2 className="input-promo__questions-title">Часто задаваемые вопросы</h2>
      <div className="input-promo__questions">
        <div className="input-promo__dropdown">
          <input
            className="input-promo__dropdown-input"
            type="checkbox"
            id="menu"
          />
          <label className="input-promo__info" for="menu">
            <label className="input-promo__label" for="menu">
              Как активировать промокод?
            </label>
            <img className="input-promo__plus" src={plus} alt="" />
          </label>
          <p className="input-promo__paragraph">
            Чтобы активировать код, Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Facere, minus? Dolores, animi eveniet quibusdam
            ipsa in quasi praesentium excepturi facilis itaque, velit porro
            beatae similique, rerum iusto repellendus asperiores fugit.
          </p>
        </div>

        <div className="input-promo__dropdown">
          <input
            className="input-promo__dropdown-input"
            type="checkbox"
            id="menu-1"
          />
          <label className="input-promo__info" for="menu-1">
            <label className="input-promo__label" for="menu-1">
              Как приглосить друга?
            </label>
            <img className="input-promo__plus" src={plus} alt="" />
          </label>
          <p className="input-promo__paragraph">
            Чтобы активировать код, Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Facere, minus? Dolores, animi eveniet quibusdam
            ipsa in quasi praesentium excepturi facilis itaque, velit porro
            beatae similique, rerum iusto repellendus asperiores fugit.
          </p>
        </div>
      </div>
    </div>
  );
}
