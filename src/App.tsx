import { UserProvider } from "./context/UserContext";
import UserTable from "./components/UserTable";
import { Header } from "./components/Header";
import "./App.css";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <main>
          <Header />
          <UserTable />
        </main>
      </div>
    </UserProvider>
  );
}

export default App;
