import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import InfiniteScroll from "react-infinite-scroll-component";
import sampleData from "../data.json";

interface UserData {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  registeredDate: string;
  isPrivate: boolean;
}

const UserTable: React.FC = () => {
  const [data, setData] = useState<UserData[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const columns = [
    {
      name: "ID",
      selector: (row: any) => row.id,
      sortable: true,
    },
    {
      name: "First Name",
      selector: (row: any) => row.firstName,
      sortable: true,
    },
    {
      name: "Last Name",
      selector: (row: any) => row.lastName,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row: any) => row.email,
      sortable: true,
    },
    {
      name: "City",
      selector: (row: any) => row.city,
      sortable: true,
    },
    {
      name: "Registered Date",
      selector: (row: any) => row.registeredDate,
      sortable: true,
    },
    {
      name: "Is Private",
      selector: (row: any) => row.isPrivate,
      sortable: true,
    },
    {
      name: "Full Name",
      selector: (row: any) => row.fullName,
      sortable: true,
      cell: (row: UserData) => `${row.firstName} ${row.lastName}`,
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const startIndex = (currentPage - 1) * 10;
        const endIndex = startIndex + 10;
        const newDataChunk = sampleData.slice(startIndex, endIndex);

        if (endIndex >= sampleData.length) {
          setHasMore(false);
        }

        setData((prevData) => [...prevData, ...newDataChunk]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [currentPage]);

  const loadMoreData = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

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
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <InfiniteScroll
                dataLength={data.length}
                next={loadMoreData}
                hasMore={hasMore}
                loader={<h4 className="text-center my-4">Loading...</h4>}
                endMessage={
                  <p className="text-center my-4">No more data to load</p>
                }
              >
                <DataTable
                  columns={columns}
                  data={data}
                  className="min-w-full divide-y divide-gray-300"
                  noHeader
                />
              </InfiniteScroll>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserTable;
