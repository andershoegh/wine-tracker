import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import UpdateProfile from "./pages/Profile";
import AuthProvider from "./contexts/AuthContext";
import LoginWrapper from "./components/LoginWrapper";
import MyWines from "./pages/MyWines";

const App: React.FC = () => {
  return (
    <div className="App bg-gray-100 relative">
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={MyWines} />
            <PrivateRoute path="/updateProfile" component={UpdateProfile} />
            <Route path="/account" component={LoginWrapper} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
};

export default App;
