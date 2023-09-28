// App.tsx
import React from "react";
import { UserProvider } from "./context/UserContext";
import UserTable from "./components/UserTable";
import Login from "./components/Login";
import Menu from "./components/Menu";

import "./App.css";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <main>
          <Login />
          <Menu />
          <UserTable />
        </main>
      </div>
    </UserProvider>
  );
}

export default App;
