import RequestManager from "../../../../api/RequestManager";

export default function PopSkins() {
  // const skins = RequestManager("GET", `store/items/${cs:go}/history`);
  const skins = RequestManager("POST", "store/items/search", { game: "csgo" });

  if (skins) {
    console.log(skins);
  }

  return (
    <div className="pop-skins">
      <h1>PopSkins</h1>
    </div>
  );
}
