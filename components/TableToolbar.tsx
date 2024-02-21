"use client";
import { LiaRandomSolid } from "react-icons/lia";

import RangeSlider from "./RangeSlider";
import SeedInput from "./SeedInput";

import ReactSelectInput from "./ReactSelectInput";
import { useState } from "react";

export default function TableToolbar() {
  const [errors, setErrors] = useState<number>(0);
  const [seeds, setSeeds] = useState<number>(0);

  const handleErrorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const parsedValue = parseInt(event.target.value, 10);
    // Clamp the value between 0 and 1000
    const newValue = Math.max(0, Math.min(1000, parsedValue || 0));
    setErrors(newValue);
  };

  const handleSeedsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const parsedValue = parseInt(event.target.value, 10);
    const newValue = Math.max(
      0,
      Math.min(1000000000000000000000000000, parsedValue || 0)
    );
    // Clamp the value between 0 and 1000
    setSeeds(newValue);
  };

  const options = [
    { value: "USA", label: "USA" },
    { value: "POLAND", label: "POLAND" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <div className="border-2 border-neutral-700 divide-x-2 font-semibold rounded-md mb-6 divide-neutral-700 bg-neutral-900 flex flex-row items-center">
      <div className="w-1/4 p-3 py-3 flex flex-col space-y-2">
        <span className="text-sm text-neutral-500">Region</span>
        <div>
          <ReactSelectInput options={options} />
        </div>
      </div>
      <div className="w-1/4 p-3 py-3 flex flex-col space-y-2">
        <span className="text-sm text-neutral-500">Errors</span>
        <div className="flex flex-row">
          <RangeSlider errors={errors} handleChange={handleErrorChange} />
          <input
            min={0}
            max={1000}
            type="text"
            onChange={handleErrorChange}
            className="p-2 text-sm w-1/3 ml-4 rounded bg-neutral-700"
            value={errors}
          />
        </div>
      </div>
      <div className="w-1/4 p-3 py-3 flex flex-col space-y-2">
        <span className="text-sm text-neutral-500">Seed</span>
        <div className="flex flex-row">
          <SeedInput value={seeds} handleChange={handleSeedsChange} />
          <button className="p-2 outline-none text-sm bg-neutral-700 rounded ml-2">
            <LiaRandomSolid className="size-5" />
          </button>
        </div>
      </div>
      <div className="w-1/4 p-3 py-3 flex flex-col space-y-2">
        <span className="text-sm text-neutral-500">Export</span>

        <button className="p-2 text-sm bg-neutral-700 rounded">EXPORT</button>
      </div>
    </div>
  );
}
