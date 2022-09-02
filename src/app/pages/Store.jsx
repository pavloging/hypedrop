import { Link } from "react-router-dom";
import Header from "../components/common/Header";
import Aside from "../components/common/Aside";
import Footer from "../components/common/Footer";

export default function Store() {
  return (
    <>
      <Header />
      <Aside />
      <Link to={"/"}>
        <button>home</button>
      </Link>
      <h1>Store</h1>
      <Footer />
    </>
  );
}
