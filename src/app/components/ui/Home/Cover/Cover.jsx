import img__csgo from "../../../../assets/home/cover/img__csgo.jpg";
import icon__scroll from "../../../../assets/home/cover/icon__scroll.svg";

export default function Cover() {
  return (
    <div className="cover" style={{ backgroundImage: `url(${img__csgo})` }}>
      <h2 className="cover__title">
        Хочешь смотреть своих любимых стримеров и получать за это скины?
      </h2>
      <img className="cover__scroll" src={icon__scroll} alt="scroll" />
    </div>
  );
}
