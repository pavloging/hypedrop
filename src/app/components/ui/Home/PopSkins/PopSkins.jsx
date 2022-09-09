import RequestManager from "../../../../api/RequestManager";
import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation, Keyboard } from "swiper";
import { Link } from "react-router-dom";

export default function PopSkins() {
  // Загрузка с backend...
  const [skins, setSkins] = useState();

  const loadData = async () => {
    const resp = await RequestManager("POST", "store/items/search", {
      game: "csgo",
      sort: "pop",
      limit: 48,
      min_price: 200,
    });
    setSkins(resp);
  };

  useEffect(() => {
    loadData();
  }, [skins]);
  // Загрузка с backend...

  if (skins && skins.items.length === 50) skins.items.splice(1, 2);

  return skins ? (
    <div className="pop-skins">
      <div className="pop-skins__navigate">
        <h2 className="pop-skins__title">Популярные предметы CS:GO</h2>
        <Link to={"/store"}>
          <button className="pop-skins__button">
            Посмотреть более {skins.items.length} предметов
          </button>
        </Link>
      </div>
      <>
        <Swiper
          slidesPerView={6}
          spaceBetween={30}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          keyboard={true}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation, Keyboard]}
          className="mySwiper"
        >
          {skins.items.map((el, index) => (
            <SwiperSlide key={index}>
              <img className="pop-skins__img" src={el.icon} alt="skin" />
              <p className="pop-skins__paragraph">{el.ru_name}</p>
              <p className="pop-skins__paragraph">От {el.price}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
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
