import React from "react";
import { useAuth } from "../contexts/AuthContext";

const Sidebar: React.FC = () => {
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-60 flex flex-col items-center justify-between bg-white relative">
      <div>Sidebar</div>
      <div className="mb-4">
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;
