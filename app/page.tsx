import Table from "@/components/Table";
import TableToolbar from "@/components/TableToolbar";

export default function Home() {
  return (
    <main className="container p-10">
      <TableToolbar />
      <div className="border-2 border-neutral-700 rounded-md overflow-hidden">
        <Table />
      </div>
    </main>
  );
}
