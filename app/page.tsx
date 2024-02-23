"use client";
import Table from "@/components/Table";
import TableToolbar from "@/components/TableToolbar";
import { useGlobalContext } from "@/context/Provider";
import { LIMIT } from "@/lib/utils";

export default function Home() {
  const context = useGlobalContext();
  if (!context) {
    throw new Error("Component must be used within a Provider");
  }
  const { loading, users, setEndOffset, endOffset } = context;

  const fetchMore = () => {
    setEndOffset(endOffset + LIMIT);
  };

  return (
    <main className="container p-4 sm:p-10 sm:py-6 ">
      {users.length === 0 && (
        <div className="border-2 border-neutral-700 rounded-md overflow-hidden mb-6 ">
          <div className="rounded p-2 px-3 w-full mx-auto">
            <div className="animate-pulse flex space-x-4">
              <div className="flex-1 space-y-3 py-1">
                <div className="grid md:grid-cols-4 gap-3">
                  <div className="h-10 md:h-20 bg-neutral-700 rounded col-span-1"></div>
                  <div className="h-10 md:h-20 bg-neutral-700 rounded col-span-1"></div>
                  <div className="h-10 md:h-20 bg-neutral-700 rounded col-span-1"></div>
                  <div className="h-10 md:h-20 bg-neutral-700 rounded col-span-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {users.length !== 0 && <TableToolbar />}

      {users.length === 0 && (
        <div className="border-2 border-neutral-700 rounded-md overflow-hidden">
          <div className="rounded p-2 px-3 w-full mx-auto">
            <div className="animate-pulse flex space-x-4">
              <div className="flex-1 space-y-3 py-1">
                <div className="grid grid-cols-11 gap-3">
                  <div className="h-12 bg-neutral-700 rounded col-span-1"></div>
                  <div className="h-12 bg-neutral-700 rounded col-span-3"></div>
                  <div className="h-12 bg-neutral-700 rounded col-span-3"></div>
                  <div className="h-12 bg-neutral-700 rounded col-span-3"></div>
                  <div className="h-12 bg-neutral-700 rounded col-span-1"></div>
                </div>
                <div className="h-12 bg-neutral-700 rounded"></div>
                <div className="space-y-3">
                  <div className="h-12 bg-neutral-700 rounded"></div>
                  <div className="h-12 bg-neutral-700 rounded"></div>
                  <div className="h-12 bg-neutral-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div
        className={`overflow-hidden relative ${
          users.length !== 0 && "border-2 border-neutral-700"
        } rounded-md mb-10 overflow-x-auto`}
      >
        <Table />

        {loading && (
          <div className="absolute flex items-center justify-center w-full h-full top-0 left-0 bg-neutral-950 bg-opacity-70">
            ...loading
          </div>
        )}
      </div>

      <div className="flex items-center justify-center mb-10">
        {users.length === 0 ||
          (!loading && (
            <button
              onClick={fetchMore}
              className="font-medium focus:ring-2 focus:ring-neutral-600 outline-none text-neutral-300 hover:bg-neutral-800/80 text-sm rounded-full left-1/2 pr-3  flex items-center justify-center flex-row px-4 p-2 bg-neutral-800 border-neutral-700 cursor-pointer border-2"
            >
              Fetch more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 bg-neutral-700 ml-2 rounded-full flex items-center justify-center"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>
          ))}
      </div>
    </main>
  );
}
