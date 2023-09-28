// Menu.tsx
import React from "react";
import { useUser } from "../context/UserContext";

const Menu: React.FC = () => {
  const { user } = useUser();

  return (
    <div className="mt-4">
      {user && (
        <div className="space-x-4">
          <button className="block rounded-md bg-green-500 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500">
            Save
          </button>
          <button className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Load
          </button>
        </div>
      )}
    </div>
  );
};

export default Menu;
