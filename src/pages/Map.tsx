import React from "react";
import Sidebar from "../components/Sidebar";

const Map: React.FC = () => {
  return (
    <div className="flex w-screen h-screen">
      <Sidebar />
      <div>Map</div>
    </div>
  );
};

export default Map;
