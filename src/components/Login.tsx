// Login.tsx
import React, { useState } from "react";
import { useUser } from "../context/UserContext";

const Login: React.FC = () => {
  const { user, login, logout } = useUser();
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = () => {
    if (!email.trim()) {
      setError("Email cannot be empty");
      return;
    }

    if (!user) {
      login(email);
    } else {
      logout();
    }

    // Clear any previous error
    setError(null);
  };

  return (
    <div>
      {user ? (
        <>
          <p>{user.email}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email
          </label>
          <div className="mt-2">
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {error && <p className="text-red-500 mt-2">{error}</p>}
          <button
            onClick={handleLogin}
            className="block mt-4 rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {user ? "Logout" : "Login"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
