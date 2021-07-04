import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import AuthProvider from "./contexts/AuthContext";
import LoginWrapper from "./components/LoginWrapper";
import MyWines from "./pages/MyWines";
import Map from "./pages/Map";
import Sidebar from "./components/Sidebar";

const App: React.FC = () => {
  return (
    <div className="App bg-gray-100 relative flex">
      <Router>
        <AuthProvider>
          <Sidebar />
          <Switch>
            <Route path="/account" component={LoginWrapper} />
            <PrivateRoute exact path="/map" component={Map} />
            <PrivateRoute exact path="/" component={MyWines} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
};

export default App;
