import { UserData } from "@/types/types";
import Papa from "papaparse";

type Props = {
  data: UserData[];
};

export default function ExportCsvButton({ data }: Props) {
  const handleDownload = async () => {
    const button: any = document.getElementById("buttonE"); // Assuming the button has a unique selector
    button.disabled = true;
    // const loader: any = document.getElementById("loader");

    try {
      // loader.classList.remove("hidden");

      data.forEach((item: any) => {
        if (item.address && typeof item.address === "object") {
          item.address = `${item.address.street}, ${item.address.city}, ${item.address.state}, ${item.address.zipCode}`;
        }
      });

      const csv = Papa.unparse(data);
      const blob = new Blob([csv], { type: "text/csv" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "data.csv";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      button.textContent = "Please wait 5 seconds.";
      await new Promise((resolve) => setTimeout(resolve, 5000));
      button.disabled = false;
    } catch (error) {
      console.error("Error downloading file:", error);
    } finally {
      // loader.classList.add("hidden");
      button.textContent = "EXPORT";
    }
  };

  return (
    <button
      id="buttonE"
      onClick={handleDownload}
      className="peer flex items-center justify-center flex-row disabled:cursor-not-allowed disabled:opacity-50 p-2 text-sm hover:bg-neutral-700/70 focus:ring-2 focus:ring-neutral-600 bg-neutral-700 rounded"
    >
      EXPORT
      {/* <svg
        id="loader"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="size-4 ml-2 hidden animate-spin"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg> */}
    </button>
  );
}
