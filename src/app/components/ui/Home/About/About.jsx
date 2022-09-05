import logo from "../../../../assets/etc/logo.svg";

export default function About() {
  return (
    <div className="about">
      <div className="about__box">
        <h2>Мы</h2>
      </div>

      <div className="about__box">
        <img src={logo} alt="logo" />
      </div>

      <div className="about__box">
        <h2 className="about__title">
          Площадка, которая объеденяет стримеров, игроков и трейдеров в одном
          месте
        </h2>
      </div>

      <div className="about__achievements">
        <div className="about__user">
          <img src={logo} alt="" />
          <h3 className="about__text">100 пользователей</h3>
        </div>
        <div className="about__user">
          <img src={logo} alt="" />
          <h3 className="about__text">10 стримеров</h3>
        </div>
        <div className="about__user">
          <img src={logo} alt="" />
          <h3 className="about__text">Провейдено трейдов 28</h3>
        </div>
        <div className="about__user">
          <img src={logo} alt="" />
          <h3 className="about__text">Дропов предметов 341</h3>
        </div>
        <div className="about__user">
          <img src={logo} alt="" />
          <h3 className="about__text">Сумма дропа 21794</h3>
        </div>
      </div>
    </div>
  );
}
