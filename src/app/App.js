import Navigation from "./navigation/index";
import { getOpenToken } from "./utils/getOpenToken";

export default function App() {
  localStorage.setItem("JWT", getOpenToken());

  return <Navigation />;
}
