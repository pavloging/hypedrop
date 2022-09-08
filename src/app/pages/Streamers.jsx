import { useState } from "react";

import Header from "../components/common/Header";
import Aside from "../components/common/Aside";
import Footer from "../components/common/Footer";
import ListInviteScreamers from "../components/ui/Streamers/ListInviteScreamers";
import PeopleStreamers from "../components/ui/Streamers/PeopleStreamers";
import SeparationStreamers from "../components/ui/Streamers/SeparationStreamers";
import Streams from "../components/ui/Streamers/Streams/Streams";

export default function Streamers() {
  const [streamers, setStreamers] = useState(false);

  const separation = (value) => {
    setStreamers(value);
  };
  return (
    <>
      <Header />
      <Aside />
      <SeparationStreamers value={streamers} onSeparation={separation} />
      {streamers ? (
        <Streams />
      ) : (
        <>
          <PeopleStreamers /> <ListInviteScreamers />
        </>
      )}
      <Footer />
    </>
  );
}
