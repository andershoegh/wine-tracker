import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import AuthProvider from "./contexts/AuthContext";
import LoginWrapper from "./components/LoginWrapper";
import MyWines from "./pages/ContentDisplayer";
import Map from "./pages/Map";

const App: React.FC = () => {
  return (
    <div className="App bg-gray-100 relative">
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={MyWines} />
            <PrivateRoute exact path="/map" component={Map} />
            <Route path="/account" component={LoginWrapper} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
};

export default App;
