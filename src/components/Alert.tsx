import { Info, Warning, WarningCircle } from "phosphor-react";
import React, { useEffect, useState } from "react";

interface IAlert {
  type: "danger" | "error" | "info";
  msg: string;
}

export const Alert: React.FC<IAlert> = ({ type, msg }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 5000);
  }, []);

  return (
    <>
      {visible ? (
        <div
          className={`${type === "error" ? "border-yellow-200" : ""} ${
            type === "danger" ? "border-red-700" : ""
          } ${
            type === "info" ? "border-blue-800" : ""
          } absolute animate-fade-in-down z-10 top-10 left-1/2 transform shadow-xl border flex bg-white py-3 px-6  rounded-lg`}
        >
          {type === "danger" ? (
            <WarningCircle className="text-red-700" size={35} />
          ) : null}
          {type === "error" ? (
            <Warning size={35} className="text-yellow-400" />
          ) : null}
          {type === "info" ? (
            <Info className="text-blue-800" size={35} />
          ) : null}
          <div className="place-self-center ml-4">{msg}</div>
        </div>
      ) : null}
    </>
  );
};
