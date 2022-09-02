import { Link } from "react-router-dom";
import Header from "../components/common/Header";
import Aside from "../components/common/Aside";
import Footer from "../components/common/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Aside />
      <Link to={"/streamers"}>
        <button>streamers</button>
      </Link>
      <Link to={"/store"}>
        <button>store</button>
      </Link>
      <Link to={"/promo"}>
        <button>promo</button>
      </Link>
      <Link to={"/nopage"}>
        <button>nopage</button>
      </Link>
      <Footer />
    </>
  );
}
