import arrow from "../../../../assets/etc/arrow.svg";
import knives from "../../../../assets/store/csgo/knives-white.png";
import pistols from "../../../../assets/store/csgo/pistols-white.png";
import rifles from "../../../../assets/store/csgo/rifles-white.png";
import smgs from "../../../../assets/store/csgo/smgs-white.png";
import shotguns from "../../../../assets/store/csgo/shotguns-white.png";
import machine from "../../../../assets/store/csgo/machine-white.png";
import gloves from "../../../../assets/store/csgo/gloves-white.png";
import stickers from "../../../../assets/store/csgo/stickers-white.png";
import agent from "../../../../assets/store/csgo/agent-white.png";
import other from "../../../../assets/store/csgo/other-white.png";

export default function FilterSkins({ page, nextPage, previousPage }) {
  return (
    <div className="filter-skins">
      <div className="filter-skins__filter">
        <div className="filter-skins__field">
          <div className="filter-skins__list">
            <div className="filter-skins__list-elements">
              <span className="filter-skins__list-item">CS:GO</span>
              <img className="filter-skins__list-img" src={arrow} alt="" />
            </div>
            <div className="filter-skins__list-none"></div>
          </div>

          <div className="filter-skins__list">
            <div className="filter-skins__list-elements">
              <span className="filter-skins__list-item">Редкость</span>
              <img className="filter-skins__list-img" src={arrow} alt="" />
            </div>
            <div className="filter-skins__list-none"></div>
          </div>
          <div className="filter-skins__list">
            <div className="filter-skins__list-elements">
              <span className="filter-skins__list-item">Категория</span>
              <img className="filter-skins__list-img" src={arrow} alt="" />
            </div>
            <div className="filter-skins__list-none"></div>
          </div>
          <div className="filter-skins__list">
            <div className="filter-skins__list-elements">
              <span className="filter-skins__list-item">Износ</span>
              <img className="filter-skins__list-img" src={arrow} alt="" />
            </div>
            <div className="filter-skins__list-none"></div>
          </div>
        </div>
        <div className="filter-skins__field">
          <div className="filter-skins__item">
            <img className="filter-skins__item-img" src={knives} alt="" />
            <span className="filter-skins__item-name">Knives</span>
          </div>
          <div className="filter-skins__item">
            <img className="filter-skins__item-img" src={pistols} alt="" />
            <span className="filter-skins__item-name">Pistols</span>
          </div>
          <div className="filter-skins__item">
            <img className="filter-skins__item-img" src={rifles} alt="" />
            <span className="filter-skins__item-name">Rifles</span>
          </div>
          <div className="filter-skins__item">
            <img className="filter-skins__item-img" src={smgs} alt="" />
            <span className="filter-skins__item-name">SMGs</span>
          </div>
          <div className="filter-skins__item">
            <img className="filter-skins__item-img" src={shotguns} alt="" />
            <span className="filter-skins__item-name">Shotguns</span>
          </div>
          <div className="filter-skins__item">
            <img className="filter-skins__item-img" src={machine} alt="" />
            <span className="filter-skins__item-name">Machine</span>
          </div>
          <div className="filter-skins__item">
            <img className="filter-skins__item-img" src={gloves} alt="" />
            <span className="filter-skins__item-name">Gloves</span>
          </div>
          <div className="filter-skins__item">
            <img className="filter-skins__item-img" src={stickers} alt="" />
            <span className="filter-skins__item-name">Stickers</span>
          </div>
          <div className="filter-skins__item">
            <img className="filter-skins__item-img" src={agent} alt="" />
            <span className="filter-skins__item-name">Agents CT</span>
          </div>
          <div className="filter-skins__item">
            <img className="filter-skins__item-img" src={agent} alt="" />
            <span className="filter-skins__item-name">Agents T</span>
          </div>
          <div className="filter-skins__item">
            <img className="filter-skins__item-img" src={other} alt="" />
            <span className="filter-skins__item-name">Other</span>
          </div>
        </div>
        <div className="filter-skins__field">
          <span className="filter-skins__item-name">Цена от</span>
          <input
            className="filter-skins__item-input"
            type="text"
            placeholder="0"
          />
          <span className="filter-skins__item-name">Цена от</span>
          <input
            className="filter-skins__item-input"
            type="text"
            placeholder="100000"
          />
          <div className="filter-skins__list">
            <div className="filter-skins__list-elements">
              <span className="filter-skins__list-item">По возростанию</span>
              <img className="filter-skins__list-img" src={arrow} alt="" />
            </div>
            <div className="filter-skins__list-none"></div>
          </div>
        </div>
      </div>

      <div className="filter-skins__paginate">
        <button
          className={
            page === 1 ? "filter-skins__btn null" : "filter-skins__btn"
          }
          onClick={page > 1 && previousPage}
        >
          <img className="filter-skins__img left" src={arrow} alt="" />
        </button>
        <h4 className="filter-skins__page">{page === 1 ? null : page - 1}</h4>
        <h3 className="filter-skins__page main">{page}</h3>
        <h4 className="filter-skins__page">{page + 1}</h4>
        <button className="filter-skins__btn" onClick={nextPage}>
          <img className="filter-skins__img right" src={arrow} alt="" />
        </button>
      </div>
    </div>
  );
}
