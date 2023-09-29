import { useState } from "react";
import { useUser } from "../context/UserContext";

export const Header = () => {
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
      setEmail("");
    } else {
      logout();
      setEmail("");
    }
    setError(null);
  };

  return (
    <>
      <header className="bg-white">
        <div className="mt-6 pr-9 pt-3 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-3 sm:space-y-0 sm:space-x-reverse md:mt-0 md:flex-row md:space-x-3">
          <div className="md:flex md:items-center md:justify-between md:space-x-5">
            <div className="flex items-start space-x-5">
              {user && (
                <>
                  <div className="flex-shrink-0 mt-2">
                    <div className="relative">
                      <img
                        className="h-16 w-16 rounded-full"
                        src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                        alt=""
                      />
                      <span
                        className="absolute inset-0 rounded-full shadow-inner"
                        aria-hidden="true"
                      ></span>
                    </div>
                  </div>

                  <div className="pt-1.5">
                    <h1 className="text-2xl font-bold text-gray-900">
                      Hamid Habib
                    </h1>
                    <p className="text-sm font-medium text-gray-500">
                      Email: <span className="text-gray-900">{user.email}</span>
                    </p>

                    <p className="text-sm font-medium text-gray-500">
                      Date: <span className="text-gray-900">{Date()}</span>
                    </p>
                  </div>
                </>
              )}

              {user ? (
                <button
                  className="block mt-2 rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={logout}
                >
                  Logout
                </button>
              ) : (
                <>
                  <div className="mt-2">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  {error && <p className="text-red-500 mt-2">{error}</p>}

                  <button
                    onClick={handleLogin}
                    className="block mt-2 rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Login
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
