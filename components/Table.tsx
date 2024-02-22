"use client";
import { useGlobalContext } from "@/context/Provider";

function Table() {
  const context = useGlobalContext();
  if (!context) {
    throw new Error("Component must be used within a Provider");
  }
  const { users, loading } = context;

  console.log("users", users);

  return (
    <table className="table-auto w-full p-10 font-medium">
      <thead className="bg-neutral-900">
        <tr className="divide-x-2 divide-neutral-700/40 border-b-2 border-neutral-700/40 text-neutral-200">
          <th className="px-4 py-4 text-left text-sm w-10">#</th>
          <th className="px-4 py-4 text-left text-sm">Random Identifier</th>
          <th className="px-4 py-4 text-left text-sm">Full Name</th>
          <th className="px-4 py-4 text-left text-sm">Address</th>
          <th className="px-4 py-4 text-left text-sm">Phone</th>
        </tr>
      </thead>
      <tbody className="divide-y-2 divide-neutral-700/40 text-neutral-400/80">
        {users.map((user, index) => (
          <tr
            key={user.id}
            className={`divide-x-2 divide-neutral-700/40 cursor-pointer group hover:bg-neutral-900/80 ${
              index % 2 === 0 ? "bg-neutral-800/70" : "bg-neutral-800/90"
            }`}
          >
            <td className="px-4 py-4 text-left text-sm">{index}</td>
            <td className="px-4 py-4 text-left text-sm">{user.id}</td>
            <td className="px-4 py-4 text-left text-sm">{user.name}</td>
            <td className="px-4 py-4 text-left text-sm">{`${user.address.city}, ${user.address.state}, ${user.address.street}, ${user.address.zipCode}`}</td>
            <td className="px-4 py-4 text-left text-sm">{user.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
