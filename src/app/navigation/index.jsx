import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Streamers from "../pages/Streamers";
import Store from "../pages/Store";
import Promo from "../pages/Promo";
import NoPage from "../pages/NoPage";
import Faq from "../menu/Faq";

export default function Navigation() {
  return <RootNavigator />;
}

function RootNavigator() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/streamers" exact component={Streamers} />
      <Route path="/store" exact component={Store} />
      <Route path="/promo" exact component={Promo} />
      <MenuNavigaror />
      <Route component={NoPage} />
    </Switch>
  );
}

function MenuNavigaror() {
  return <Route path="/faq" exact component={Faq} />;
}
