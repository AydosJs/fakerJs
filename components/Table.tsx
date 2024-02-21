function Table() {
  return (
    <table className=" table-auto w-full p-10 font-medium">
      <thead className="bg-neutral-900">
        <tr className="divide-x divide-neutral-700 border-b border-neutral-700 text-neutral-200">
          <th className="px-4 py-4 text-left text-sm">Index</th>
          <th className="px-4 py-4 text-left text-sm">Random Identifier</th>
          <th className="px-4 py-4 text-left text-sm">Full Name</th>
          <th className="px-4 py-4 text-left text-sm">Address</th>
          <th className="px-4 py-4 text-left text-sm">Phone</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-neutral-700 text-neutral-400">
        {[1, 2, 3, 4, 5, 6, 7, 7].map((i, index) => (
          <tr
            key={index}
            className={`divide-x divide-neutral-700 cursor-pointer group hover:bg-neutral-900 ${
              index % 2 === 0 ? "bg-neutral-800/70" : "bg-neutral-800/90"
            }`}
          >
            <td className="px-4 py-4 text-left text-sm">1</td>
            <td className="px-4 py-4 text-left text-sm">ID123</td>
            <td className="px-4 py-4 text-left text-sm">John Doe</td>
            <td className="px-4 py-4 text-left text-sm">123 Main St</td>
            <td className="px-4 py-4 text-left text-sm">123-456-7890</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
