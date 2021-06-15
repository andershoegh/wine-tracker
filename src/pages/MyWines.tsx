import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

const MyWines: React.FC = () => {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  const handleLogout = async () => {
    setError("");

    try {
      await logout();
      history.push("/account");
    } catch {
      setError("Failed to log out");
    }
  };

  return (
    <div>
      <div>
        <div>Profile</div>
        {error && <p>{error}</p>}
        <strong>Email:</strong>
        {currentUser.email}
        <Link to="/updateProfile">Update profile</Link>
      </div>
      <div>
        <button onClick={handleLogout}>Log out</button>
      </div>
    </div>
  );
};

export default MyWines;
