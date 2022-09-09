export default function getItemColor(rarity) {
  switch (rarity.toLowerCase()) {
    // dota
    case "common":
      return "#abbdd4";
    case "uncommon":
      return "#4d76a5";
    case "rare":
      return "#455fdb";
    case "mythical":
      return "#8145f1";
    case "immortal":
      return "#d3a339";
    case "legendary":
      return "#c02dd2";
    case "arcana":
      return "#a3d859";
    case "ancient":
      return "#d24747";

    // csgo
    case "consumer grade":
      return "#b0c3d9";
    case "mil-spec grade":
      return "#4b69ff";
    case "industrial grade":
      return "#5e98d9";
    case "restricted":
      return "#8847ff";
    case "classified":
      return "#d32ce6";
    case "covert":
      return "#eb4b4b";
    case "base grade":
      return "#b0c3d9";
    case "distinguished":
      return "#4b69ff";
    case "exceptional":
      return "#8847ff";
    case "superior":
      return "#d32ce6";
    case "master":
    case "extraordinary":
      return "#eb4b4b";
    case "high grade":
      return "#4b69ff";
    case "remarkable":
      return "#8847ff";
    case "exotic":
      return "#d32ce6";
    case "★":
    case "souvenir":
    case "contraband":
      return "#e4ae39";

    // csgo rus
    case "ширпотреб":
      return "#b0c3d9";
    case "армейское качество":
      return "#4b69ff";
    case "промышленное качество":
      return "#5e98d9";
    case "запрещённое":
      return "#8847ff";
    case "засекреченное":
      return "#d32ce6";
    case "тайное":
      return "#eb4b4b";
    case "базового класса":
      return "#b0c3d9";
    case "заслуженный":
      return "#4b69ff";
    case "исключительный":
      return "#8847ff";
    case "превосходный":
      return "#d32ce6";
    case "мастерский":
    case "экстраординарного типа":
      return "#eb4b4b";
    case "высшего класса":
      return "#4b69ff";
    case "примечательного типа":
      return "#8847ff";
    case "экзотичного вида":
      return "#d32ce6";
    case "контрабанда":
      return "#e4ae39";

    default:
      return "#32373f";
  }
}
