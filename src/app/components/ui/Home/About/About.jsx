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
        <h2>
          Площадка, которая объеденяет стримеров, игроков и трейдеров в одном
          месте
        </h2>
      </div>

      <div className="about__box">{/* Достоинства */}</div>
    </div>
  );
}
