import icon__youtube from "../../../../assets/home/offer/youtube.svg";

export default function Offer() {
  return (
    <div className="offer">
      <h2 className="offer__title">Смотри стримы на YouTube и Twitch</h2>
      <p className="offer__paragraph">
        Получай скины за просмотр стримов. Активно участвуй в аукционах и других
        играх на сайте. Накапливай свои бонусы и обменивай их на ценные призы.
        Проводи время за просмотром любимых стримеров с пользой.
      </p>
      <img className="offer__youtube" src={icon__youtube} alt="youtube" />
    </div>
  );
}
