"use client";
import { FaRandom } from "react-icons/fa";

import ReactSelect from "react-select";
import RangeSlider from "./RangeSlider";
import SeedInput from "./SeedInput";

export default function TableToolbar() {
  const options = [
    { value: "USA", label: "USA" },
    { value: "POLAND", label: "POLAND" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <div className="border-2 border-neutral-700 divide-x-2 font-medium rounded-md mb-6 divide-neutral-700 bg-neutral-900 flex flex-row items-center">
      <div className="w-1/4 p-4 py-3 flex flex-col space-y-2">
        <span className="text-sm text-neutral-500">Region</span>
        <div>
          <ReactSelect options={options} />
        </div>
      </div>
      <div className="w-1/4 p-4 py-3 flex flex-col space-y-2">
        <span className="text-sm text-neutral-500">Errors</span>
        <div className="flex flex-row">
          <RangeSlider />
          <input
            type="text"
            className="p-2 text-sm w-1/3 ml-4 rounded bg-neutral-700"
            value={100}
          />
        </div>
      </div>
      <div className="w-1/4 p-4 py-3 flex flex-col space-y-2">
        <span className="text-sm text-neutral-500">Seed</span>
        <div className="flex flex-row">
          <SeedInput />
          <button className="p-3 text-sm bg-neutral-700 rounded ml-2">
            <FaRandom className="size-5" />
          </button>
        </div>
      </div>
      <div className="w-1/4 p-4 py-3 flex flex-col space-y-2">
        <span className="text-sm text-neutral-500">Export</span>

        <button className="p-3 text-sm bg-neutral-700 rounded">EXPORT</button>
      </div>
    </div>
  );
}
