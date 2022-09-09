export default function Faq() {
  return (
    <div className="faq">
      <div className="faq__panel">
        <div className="faq__panel-up">
          <button className="faq__panel-btn">Сайт</button>
          <button className="faq__panel-btn">Пополнение</button>
          <button className="faq__panel-btn">Инвентарь</button>
        </div>
        <div className="faq__panel-up">
          <button className="faq__panel-btn">Поддержка</button>
          <button className="faq__panel-btn">Контакты</button>
          <button className="faq__panel-btn">Условия использования</button>
          <button className="faq__panel-btn">
            Политика конфиденциальности
          </button>
        </div>
      </div>
      <div className="faq__view"></div>
    </div>
  );
}
