import RequestManager from "../../../../api/RequestManager";
import coin from "../../../../assets/etc/coin.svg";
import React, { useContext } from "react";

import { SkinsContext } from "../../../../pages/Store";

export default function ViewSkins() {
  const page = useContext(SkinsContext);

  const skins = RequestManager("POST", "store/items/search", {
    game: "csgo",
    sort: "pop",
    limit: 48,
    page,
    min_price: 200,
  });

  return skins ? (
    <div className="view-skins">
      <h1>{page}</h1>
      {skins.items.map((el, index) => (
        <div className="view-skins__container" key={index}>
          <div
            className="view-skins__background"
            style={{
              background: `url(${el.icon})`,
            }}
          ></div>
          <span className="view-skins__span">{el.ru_name}</span>
          <div className="view-skins__price">
            <img className="view-skins__coin" src={coin} alt="coin" />
            <span className="view-skins__price-span">{el.price}</span>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
