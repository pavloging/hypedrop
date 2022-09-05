import Header from "../components/common/Header";
import Aside from "../components/common/Aside";
import Offer from "../components/ui/Home/Offer";
import Cover from "../components/ui/Home/Cover";
import About from "../components/ui/Home/About";
import WeCommunity from "../components/ui/Home/WeCommunity";
import Footer from "../components/common/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Aside />
      <Offer />
      <Cover />
      <About />
      <WeCommunity />
      <Footer />
    </>
  );
}
