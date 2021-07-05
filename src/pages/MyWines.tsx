import { MagnifyingGlass } from "phosphor-react";
import React, { useEffect, useState } from "react";
import { WineCard } from "../components/WineCard";
import { useAuth } from "../contexts/AuthContext";
import { fs } from "../firebase";

interface IWine {
  name: string;
  country: string;
  region?: string;
  year: string;
  worth: string;
  valueArray: number[];
  id: string;
}

const ContentDisplayer: React.FC = () => {
  const { currentUser } = useAuth();
  const { uid } = currentUser;
  const [wines, setWines] = useState<IWine[]>([]);
  const [loading, setLoading] = useState(false);

  // Fetch wines from FS
  useEffect(() => {
    setLoading(true);
    let temp: IWine[] = [];
    fs.collection(`/users/${uid}/mywines`)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          temp.push({ id: doc.id, ...doc.data() } as IWine);
        });
        setWines(temp);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [uid]);

  return (
    <>
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
        {!loading && (
          <div className="grid grid-flow-row grid-cols-2 md:grid-cols-3 gap-4 pb-10">
            {wines.map((wine) => (
              <WineCard
                name={wine.name}
                country={wine.country}
                year={wine.year}
                worth={wine.worth}
                region={wine.region}
                valueArray={[2000, 1900, 2300, 2500, 2000, 2700, 3000]}
                key={wine.id}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ContentDisplayer;
