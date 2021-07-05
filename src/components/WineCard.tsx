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

  const [saleInitiated, setSaleInitiated] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="">
      {showMessage && (
        <Alert
          msg={
            "Request to sell sent - a sales representative will contact you within 24 hours"
          }
          type="info"
        />
      )}
      {/* <div className="flex flex-wrap"> */}
      <div className="bg-white w-full p-6 font-serif text-gray-800 shadow-lg rounded-lg">
        <div className="flex justify-between items-center">
          <div className="text-2xl text-gray-800">{name}</div>
          <div>
            {saleInitiated ? (
              <div className="text-xs font-bold bg-blue-900 text-white px-2 rounded-lg">
                Awaiting sale
              </div>
            ) : (
              <div className="text-xs font-bold bg-red-900 text-white px-2 rounded-lg">
                In warehouse
              </div>
            )}
          </div>
        </div>

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
        <div className="border-gray-200 my-4 border border-opacity-50 "></div>
        <Line
          options={{
            animation: {
              duration: 0,
            },
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
          {saleInitiated ? (
            <button
              onClick={() => {
                setSaleInitiated(false);
              }}
              className="text-xs font-bold  text-red-900"
            >
              Cancel sale
            </button>
          ) : (
            <button
              onClick={() => {
                setSaleInitiated(true);
                setShowMessage(true);
              }}
              className="text-xs font-bold  text-red-900"
            >
              Request to sell
            </button>
          )}
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};
