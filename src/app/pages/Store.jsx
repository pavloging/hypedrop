import React, { useState } from "react";

import Header from "../components/common/Header";
import Aside from "../components/common/Aside";
import Footer from "../components/common/Footer";
import FilterSkins from "../components/ui/Store/FilterSkins/FilterSkins";
import ViewSkins from "../components/ui/Store/ViewSkins/ViewSkins";

export const SkinsContext = React.createContext();

export default function Store() {
  const [page, setPage] = useState(1);

  const nextPage = () => setPage((prev) => prev + 1);

  const previousPage = () => setPage((prev) => prev - 1);

  return (
    <SkinsContext.Provider value={page}>
      <Header />
      <Aside />
      <FilterSkins
        page={page}
        nextPage={nextPage}
        previousPage={previousPage}
      />
      <ViewSkins />
      <Footer />
    </SkinsContext.Provider>
  );
}
