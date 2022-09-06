import Header from "../components/common/Header";
import Aside from "../components/common/Aside";
import Footer from "../components/common/Footer";
import ListInviteScreamers from "../components/ui/Streamers/ListInviteScreamers";
import PeopleStreamers from "../components/ui/Streamers/PeopleStreamers/PeopleStreamers";

export default function Streamers() {
  return (
    <>
      <Header />
      <Aside />
      <PeopleStreamers />
      <ListInviteScreamers />
      <Footer />
    </>
  );
}
