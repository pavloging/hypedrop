import RequestManager from "../../../../api/RequestManager";
import coin from "../../../../assets/etc/coin.svg";
import React, { useContext, useEffect, useState } from "react";
import { SkinsContext } from "../../../../pages/Store";
import getItemColor from "../../../../utils/getItemColor";

export default function ViewSkins() {
  const page = useContext(SkinsContext);
  // Загрузка с backend...
  const [skins, setSkins] = useState();

  const loadData = async () => {
    const resp = await RequestManager("POST", "store/items/search", {
      game: "csgo",
      sort: "pop",
      limit: 48,
      page,
      min_price: 200,
    });
    setSkins(resp);
  };

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  console.log(skins);
  // Загрузка с backend...

  return skins ? (
    <div className="view-skins">
      {skins.items.map((el, index) => (
        <div className="view-skins__container" key={index}>
          <div
            className="view-skins__background-skins"
            style={{
              background: `url("${el.icon}")`,
              filter: `drop-shadow(${getItemColor(el.ru_rarity)} 0px 0px 15px)`,
            }}
          ></div>
          <span className="view-skins__span">{el.ru_name}</span>
          <div className="view-skins__price">
            <img className="view-skins__coin" src={coin} alt="coin" />
            <span className="view-skins__price-span">{el.price}</span>
          </div>
          <div
            className="view-skins__background-rarity"
            style={{ background: getItemColor(el.ru_rarity) }}
          ></div>
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
