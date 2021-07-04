import React from "react";
import { WineCard } from "../components/WineCard";

const ContentDisplayer: React.FC = () => {
  return (
    <div className="flex flex-wrap w-screen h-screen overflow-y-scroll">
      <WineCard
        name="Barbera D'Alba"
        country="Italy"
        year="2018"
        worth="3000"
        region="Alba"
        valueArray={[2000, 1900, 2300, 2500, 2000, 2700, 3000]}
      />
      {/* <WineCard
        name="Barolo"
        country="Italy"
        year="2016"
        worth="8000"
        region="Alba"
        valueArray={[3000, 2000, 1900, 4000, 7400, 7800, 8000]}
      /> */}
      <WineCard
        name="Barolo"
        country="Italy"
        year="2016"
        worth="8000"
        region="Alba"
        valueArray={[3000, 2000, 1900, 4000, 7400, 7800, 8000]}
      />
      <WineCard
        name="Roero"
        country="Italy"
        year="2018"
        worth="2500"
        region="Roero"
        valueArray={[3000, 3000, 4000, 1200, 1000, 3700, 2500]}
      />
    </div>
  );
};

export default ContentDisplayer;
