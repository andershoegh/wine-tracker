import React from "react";
import { Switch, Route } from "react-router-dom";
import WineIcon from "../resources/icons/WineIcon";
import ForgotPassword from "./ForgotPassword";
import Login from "./Login";
import Signup from "./Signup";

const LoginWrapper: React.FC = () => {
  console.log("Wrapper");

  return (
    <>
      <div className="flex justify-center h-screen place-items-center">
        <div className="bg-white rounded-xl p-6 shadow-md">
          <div className="justify-center text-red-800 flex">
            <WineIcon height="56" width="56" />
          </div>
          <div className="text-center font-extrabold text-2xl mt-3 mb-2">
            WineTracker
          </div>
          <Switch>
            <Route exact path="/account" component={Login} />
            <Route path="/account/signup" component={Signup} />
            <Route
              path="/account/forgotPassword"
              component={ForgotPassword}
            ></Route>
          </Switch>
        </div>
      </div>
    </>
  );
};
export default LoginWrapper;
