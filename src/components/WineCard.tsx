import {
  CurrencyEur,
  GlobeHemisphereWest,
  Hourglass,
  MapPinLine,
} from "phosphor-react";
import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Alert } from "./Alert";

interface Wine {
  name: string;
  country: string;
  region?: string;
  year: string;
  worth: string;
  valueArray: number[];
}

export const WineCard: React.FC<Wine> = ({
  name,
  country,
  region,
  year,
  worth,
  valueArray,
}) => {
  const labels = ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul"];
  const data = {
    labels: labels,
    datasets: [
      {
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.75)",
        data: valueArray,
      },
    ],
  };

  const [showMessage, setShowMessage] = useState(false);

  return (
    <>
      {showMessage && (
        <Alert
          msg={
            "Request to sell sent - a sales representative will contact you within 24 hours"
          }
          type="info"
        />
      )}
      <div className="grid grid-flow-col grid-cols-3 grid-rows-3 gap-4">
        {/* <div className="bg-white w-full m-4 p-6 font-serif text-gray-800 shadow-lg rounded-lg"> */}
        <div className="text-2xl text-gray-800">{name}</div>

        <div className="flex mt-2 text-gray-500 items-center">
          <GlobeHemisphereWest className="mr-1" />
          <p className="text-sm">{country}</p>
        </div>
        <div className="flex mt-2 text-gray-500 items-center">
          <MapPinLine className="mr-1" />
          <p className="text-sm">{region}</p>
        </div>
        <div className="flex mt-2 text-gray-500 items-center">
          <Hourglass className="mr-1" />
          <p className="text-sm">{year}</p>
        </div>
        <div className="border-gray-200 m-2 border border-opacity-50 "></div>
        <Line
          options={{
            plugins: {
              legend: { display: false },
            },
            pointRadius: 0,
            elements: {
              line: {
                borderJoinStyle: "rouns",
              },
            },
          }}
          data={data}
          type="line"
        />
        <div className="flex mt-2 text-xs text-gray-500 items-center">
          Estimated value: {worth} <CurrencyEur className="mr-1" />
        </div>
        <div className="flex justify-end">
          <button
            onClick={() => {
              setShowMessage(true);
            }}
            className="text-xs font-bold  text-red-900"
          >
            REQUEST TO SELL
          </button>
        </div>
      </div>
    </>
  );
};
