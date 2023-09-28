// UserProvider.tsx
import React, { createContext, useContext, useState, useEffect } from "react";

interface User {
  email: string;
}

interface UserContextType {
  user: User | null;
  login: (email: string) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check local storage for a previously logged-in user
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email: string) => {
    // Simulate login by setting the user based on the email
    setUser({ email });
    // Store user data in local storage
    localStorage.setItem("user", JSON.stringify({ email }));
  };

  const logout = () => {
    // Clear user data from state and local storage
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
