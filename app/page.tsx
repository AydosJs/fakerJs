"use client";
import Table from "@/components/Table";
import TableToolbar from "@/components/TableToolbar";
import { useGlobalContext } from "@/context/Provider";

export default function Home() {
  const context = useGlobalContext();
  if (!context) {
    throw new Error("Component must be used within a Provider");
  }
  const { loading, users } = context;

  return (
    <main className="container p-10">
      <TableToolbar />

      {users.length === 0 && loading && (
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

      {users.length !== 0 && (
        <div className="relative border-2 border-neutral-700 rounded-md overflow-hidden">
          <Table users={users} />

          {loading && (
            <div className="absolute flex items-center justify-center w-full h-full top-0 left-0 bg-neutral-950 bg-opacity-70">
              ...loading
            </div>
          )}
        </div>
      )}
    </main>
  );
}
