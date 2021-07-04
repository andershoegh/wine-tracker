import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { Alert } from "./Alert";

const Signup: React.FC = () => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const confirmPasswordRef = useRef<HTMLInputElement | null>(null);
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();

    if (passwordRef.current && confirmPasswordRef.current && emailRef.current) {
      if (passwordRef.current.value !== confirmPasswordRef.current.value) {
        return setError("Passwords do not match");
      }
      if (emailRef.current.value === "") {
        return setError("Please enter an email address");
      }
      // Password match will check if the other password field is filled out
      if (passwordRef.current.value === "") {
        return setError("Please enter your password in both fields");
      }

      try {
        setError("");
        setLoading(true);
        await signup(emailRef.current.value, passwordRef.current.value);
        setTimeout(() => {
          history.push("/"); // TODO: figure out how to make sure user object is loaded before history push without timer
        }, 1000);
      } catch {
        setError("Failed to create account");
      }
      setLoading(false);
    }
  }

  return (
    <>
      <div className="text-center font-medium">Create an account</div>
      {error && <Alert type="error" msg={error} />}
      <form className="my-6 w-80" onSubmit={handleSubmit}>
        <div>
          <input
            className="block rounded-md w-full bg-gray-100 p-3 my-1"
            type="email"
            placeholder="Email"
            ref={emailRef}
            id="email"
            name="email"
          ></input>
        </div>
        <input
          className="block rounded-md w-full bg-gray-100 p-3 my-1"
          type="password"
          placeholder="Password (min. 6 characters)"
          ref={passwordRef}
          id="password"
          name="password"
        ></input>
        <input
          className="block rounded-md w-full bg-gray-100 p-3 my-1"
          type="password"
          placeholder="Repeat password"
          ref={confirmPasswordRef}
          id="confirmPassword"
          name="confirmPassword"
        ></input>
        <button
          className="text-center rounded-md p-3 my-1 w-full bg-red-900 text-pink-50 font-medium"
          disabled={loading}
          type="submit"
        >
          Sign up
        </button>
      </form>
      <div className="mt-6 text-gray-600 text-md text-center rounded-md">
        Already have an account?{" "}
        <Link className="font-medium text-red-900" to="/account/">
          Log in
        </Link>
      </div>
    </>
  );
};

export default Signup;
