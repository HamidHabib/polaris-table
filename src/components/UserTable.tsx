import React from "react";
import {
  DataGridPro,
  GridColDef,
  GridValueGetterParams,
} from "@mui/x-data-grid-pro";

import sampleData from "../data.json";
import { useUser } from "../context/UserContext";

const UserTable: React.FC = () => {
  const { user } = useUser();

  function getFullName(params: GridValueGetterParams) {
    return `${params.row.firstName || ""} ${params.row.lastName || ""}`;
  }

  function getIsPrivate(params: GridValueGetterParams) {
    return `${params.row.isPrivate ? "Private" : "Public"}`;
  }

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
    },

    {
      field: "firstName",
      headerName: "First name",
    },

    {
      field: "lastName",
      headerName: "Last name",
    },

    {
      field: "email",
      headerName: "Email",
      width: 300,
    },

    {
      field: "city",
      headerName: "City",
      width: 200,
    },

    {
      field: "registeredDate",
      headerName: "Registered Date",
      width: 200,
    },

    {
      field: "isPrivate",
      headerName: "Is Private",
      valueGetter: getIsPrivate,
    },

    {
      field: "Full name",
      headerName: "Full name",
      valueGetter: getFullName,
      width: 200,
    },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Users
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, email,
            and city.
          </p>
        </div>
      </div>

      {user && (
        <>
          <button className=" mt-2 mr-2 rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Save
          </button>

          <button className=" mt-2 rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Load
          </button>
        </>
      )}
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <DataGridPro
                {...sampleData}
                loading={sampleData.rows.length === 0}
                columns={columns}
                rowHeight={38}
                checkboxSelection
                pagination={true}
                disableRowSelectionOnClick
                autosizeOptions={{
                  columns: columns.map((column) => column.field),
                  includeOutliers: true,
                  includeHeaders: true,
                }}
                disableColumnMenu={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserTable;
