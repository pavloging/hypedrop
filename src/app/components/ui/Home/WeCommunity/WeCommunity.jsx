import RequestManager from "../../../../api/RequestManager";

export default function WeCommunity() {
  const streamers = RequestManager("get", "streamers");

  return streamers ? (  
    <div className="we-community">
      <h2 className="we-community__title">
        Мы - часть стримеров и трейдеров в одном сообществе
      </h2>
      <div className="we-community__card">
        <h2>text</h2>
      </div>
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
