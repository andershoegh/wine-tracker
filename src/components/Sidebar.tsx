import { ChartLine, MapPin, Notebook, SignOut } from "phosphor-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import WineIcon from "../resources/icons/WineIcon";

const Sidebar: React.FC = () => {
  const { logout } = useAuth();
  const location = useLocation();
  const { currentUser } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {currentUser ? (
        <div className="w-28 flex flex-col items-center justify-between bg-white relative">
          <div className="mt-8 w-full">
            <Link className="" to="/">
              <div className="justify-center text-red-800 flex">
                <WineIcon height="40" width="40" />
              </div>
            </Link>
            <div className="h-px mx-4 mt-8 bg-gray-300 relative"></div>
            <div className="flex justify-center mt-8 relative w-full">
              <Link className="" to="/">
                <div className="justify-center bg-red-900 w-16 h-16 items-center rounded-full flex">
                  <Notebook className="w-8 h-8 text-white" />
                </div>
                <div className="text-xs font-medium text-gray-800 text-center mt-2">
                  My Wines
                </div>
                {location.pathname === "/" ? (
                  <div className="transition h-4/5 w-1 rounded-tl-lg rounded-bl-lg bg-red-800 absolute inset-y-0 my-auto right-0"></div>
                ) : null}
              </Link>
            </div>
            {/* <div className="flex justify-center mt-8 relative w-full">
              <Link className="" to="/map">
                <div className="justify-center bg-red-900 w-16 h-16 items-center rounded-full flex">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div className="text-xs font-medium text-gray-800 text-center mt-2">
                  Map
                </div>
                {location.pathname === "/map" ? (
                  <div className="transition h-4/5 w-1 rounded-tl-lg rounded-bl-lg bg-red-800 absolute inset-y-0 my-auto right-0"></div>
                ) : null}
              </Link>
            </div> */}

            <div className="flex justify-center mt-8 relative w-full">
              <Link className="" to="/invest">
                <div className="justify-center bg-red-900 w-16 h-16 items-center rounded-full flex">
                  <ChartLine className="w-8 h-8 text-white" />
                </div>
                <div className="text-xs font-medium text-gray-800 text-center mt-2">
                  Invest
                </div>
                {location.pathname === "/invest" ? (
                  <div className="transition h-4/5 w-1 rounded-tl-lg rounded-bl-lg bg-red-800 absolute inset-y-0 my-auto right-0"></div>
                ) : null}
              </Link>
            </div>
          </div>
          <div className="mb-8 w-full">
            <div className="h-px mx-4 mb-8 bg-gray-300"></div>
            <div className="flex justify-center" onClick={handleLogout}>
              <SignOut className="w-6 h-6" />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Sidebar;
