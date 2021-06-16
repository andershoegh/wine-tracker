import React from "react";
import Sidebar from "../components/Sidebar";

const ContentDisplayer: React.FC = () => {
  return (
    <div className="flex w-screen h-screen">
      <Sidebar />
      <div>Main content</div>
    </div>
  );
};

export default ContentDisplayer;
