import { MagnifyingGlass } from "phosphor-react";
import React from "react";
import { WineCard } from "../components/WineCard";

const ContentDisplayer: React.FC = () => {
  return (
    <div className="w-full h-full mx-10 my-6">
      <div className="flex bg-white w-2/5 h-12 mb-4 rounded-lg p-4 items-center">
        <MagnifyingGlass className="mr-2" />
        {/* TODO: Implement fetch wine data from firebase -> get in array -> filter on array for search functionality */}
        <input
          type="text"
          placeholder="Search for a wine"
          className="outline-none text-sm w-full h-full"
        ></input>
      </div>
      <div className="grid grid-flow-row grid-cols-2 md:grid-cols-3 gap-4 pb-10">
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
        <WineCard
          name="Roero"
          country="Italy"
          year="2018"
          worth="2500"
          region="Roero"
          valueArray={[3000, 3000, 4000, 1200, 1000, 3700, 2500]}
        />{" "}
        <WineCard
          name="Roero"
          country="Italy"
          year="2018"
          worth="2500"
          region="Roero"
          valueArray={[3000, 3000, 4000, 1200, 1000, 3700, 2500]}
        />{" "}
        <WineCard
          name="Roero"
          country="Italy"
          year="2018"
          worth="2500"
          region="Roero"
          valueArray={[3000, 3000, 4000, 1200, 1000, 3700, 2500]}
        />{" "}
        <WineCard
          name="Roero"
          country="Italy"
          year="2018"
          worth="2500"
          region="Roero"
          valueArray={[3000, 3000, 4000, 1200, 1000, 3700, 2500]}
        />{" "}
        <WineCard
          name="Roero"
          country="Italy"
          year="2018"
          worth="2500"
          region="Roero"
          valueArray={[3000, 3000, 4000, 1200, 1000, 3700, 2500]}
        />{" "}
        <WineCard
          name="Roero"
          country="Italy"
          year="2018"
          worth="2500"
          region="Roero"
          valueArray={[3000, 3000, 4000, 1200, 1000, 3700, 2500]}
        />
      </div>
    </div>
  );
};

export default ContentDisplayer;
