import { Link } from "react-router-dom";

export default function ListInviteScreamers() {
  return (
    <div className="list-invite-screamers">
      <h1 className="list-invite-screamers__title">
        Хочем быть в этом списке?
      </h1>
      <Link to={"/"} className="list-invite-screamers__link">
        <button className="list-invite-screamers__button">Переходи</button>
      </Link>
    </div>
  );
}
