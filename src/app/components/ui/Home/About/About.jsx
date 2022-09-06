import logo from "../../../../assets/etc/logo.svg";
import drops from "../../../../assets/home/about/drops.png";

export default function About() {
  return (
    <div className="about">
      <div className="about__box">
        <h2 className="about__text">Мы</h2>
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
          <img
            className="about__img"
            style={{ width: "190px", transform: "translateX(-25px)" }}
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/axe.png"
            alt=""
          />
          <h2 className="about__numbers">152</h2>
          <h3 className="about__text">Пользователей</h3>
        </div>
        <div className="about__user">
          <img className="about__img" src={drops} alt="" />
          <h2 className="about__numbers">25</h2>
          <h3 className="about__text">Стримеров</h3>
        </div>
        <div className="about__user">
          <img
            className="about__img"
            src="https://cdn.cloudflare.steamstatic.com/apps/csgo/images/operationriptide/thumb_riptide_case.png"
            alt=""
          />
          <h2 className="about__numbers">46</h2>
          <h3 className="about__text">Трейдов было проведено</h3>
        </div>
        <div className="about__user">
          <img
            className="about__img"
            src="https://i.pinimg.com/originals/0a/d5/85/0ad58501df5cfacda3d342b837a82399.png"
            alt=""
          />
          <h2 className="about__numbers">210</h2>
          <h3 className="about__text">Дропов раздано</h3>
        </div>
        <div className="about__user">
          <img
            className="about__img"
            src="https://www.digiseller.ru/preview/599286/p1_2134247_b8bd3e19.png"
            alt=""
          />
          <h2 className="about__numbers">3450</h2>
          <h3 className="about__text">Сумма всех дропов</h3>
        </div>
      </div>
    </div>
  );
}
