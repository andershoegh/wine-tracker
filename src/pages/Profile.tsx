import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

const UpdateProfile: React.FC = () => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const confirmPasswordRef = useRef<HTMLInputElement | null>(null);
  const { currentUser, updatePassword, updateEmail } = useAuth();
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();

    if (passwordRef.current && confirmPasswordRef.current && emailRef.current) {
      if (passwordRef.current.value !== confirmPasswordRef.current.value) {
        return setError("Passwords do not match");
      }
      const promises = [];
      setError("");
      setLoading(true);
      if (emailRef.current.value !== currentUser.email) {
        promises.push(updateEmail(emailRef.current.value));
      }
      if (passwordRef.current.value) {
        promises.push(updatePassword(passwordRef.current.value));
      }

      Promise.all(promises)
        .then(() => {
          history.push("/");
        })
        .catch(() => {
          setError("Failed to update account");
        })
        .finally(() => {
          setLoading(false);
        });

      console.log("hello");
      try {
        // await signup(emailRef.current.value, passwordRef.current.value)
        history.push("/");
      } catch {
        setError("Failed to create account");
      }

      setLoading(false);
    }
  }

  return (
    <>
      <div>Update profile</div>
      {error && <h1>{error}</h1>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Enter your email:</label>
          <input
            type="email"
            ref={emailRef}
            id="email"
            name="email"
            defaultValue={currentUser.email}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            ref={passwordRef}
            placeholder="Leave blank to keep existing password"
            id="password"
            name="password"
          ></input>
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm password:</label>
          <input
            type="confirmPassword"
            placeholder="Leave blank to keep existing password"
            ref={confirmPasswordRef}
            id="confirmPassword"
            name="confirmPassword"
          ></input>
        </div>
        <button disabled={loading} type="submit">
          Update profile
        </button>
      </form>
      <div>
        <Link to="/">Cancel</Link>
      </div>
    </>
  );
};
export default UpdateProfile;
