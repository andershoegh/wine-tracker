import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute';
import UpdateProfile from './pages/Profile';
import ForgotPassword from './components/ForgotPassword';
import Login from './components/Login';
import Signup from './components/Signup';
import AuthProvider from './contexts/AuthContext';
import MyWines from './pages/MyWines';

function App() {
  return (
    <div className="App">
      <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component={MyWines} />
          <PrivateRoute path="/updateProfile" component={UpdateProfile} />
          <Route path="/signup" component={Signup} />
          <Route path="/forgotPassword" component={ForgotPassword}></Route>
          <Route path="/login" component={Login} />
        </Switch>
    </AuthProvider>
      </Router>
      
    
    </div>

  );
}

export default App;
