"use client";
import { LiaRandomSolid } from "react-icons/lia";
import RangeSlider from "./RangeSlider";
import SeedInput from "./SeedInput";

import ReactSelectInput, { OnChangeFunction } from "./ReactSelectInput";
import { useGlobalContext } from "@/context/Provider";
import { LIMIT, localization } from "@/lib/utils";
import ExportCsvButton from "./ExportCsvButton";
import { slice } from "lodash";

export default function TableToolbar() {
  const context = useGlobalContext();
  if (!context) {
    throw new Error("Component must be used within a Provider");
  }
  const {
    users,
    params: paramContext,
    setParams,
    endOffset,
    setEndOffset,
  } = context;

  const handleErrorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const parsedValue = parseInt(event.target.value, 10);
    const newValue = Math.max(0, Math.min(1000, parsedValue || 0));
    setParams((prevState) => ({
      ...prevState,
      errors: newValue,
    }));
  };

  const handleSeedsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const parsedValue = parseInt(event.target.value, 10);
    const newValue = Math.max(
      0,
      Math.min(1000000000000000000000000000, parsedValue || 0)
    );
    setParams((prevState) => ({
      ...prevState,
      seeds: newValue,
      errors: 0,
    }));
    setEndOffset(LIMIT);
  };

  const handleChange: OnChangeFunction = (value) => {
    setParams((prevState) => ({
      ...prevState,
      region: {
        value: value.value,
        label: value.label,
      },
    }));

    setEndOffset(LIMIT);
  };

  const generateRandomSeed = () => {
    const randomNumber = window.crypto.getRandomValues(new Uint32Array(1))[0];
    setParams((prevState) => ({
      ...prevState,
      seeds: randomNumber,
      errors: 0,
    }));

    setEndOffset(LIMIT);
  };

  return (
    <div className="border-2 border-neutral-700 divide-x-2 font-semibold rounded-md mb-6 divide-neutral-700/40 bg-neutral-900 flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/4 p-2 md:p-3 md:py-3 flex flex-col space-y-2">
        <span className="text-sm text-neutral-500">Region</span>
        <div>
          <ReactSelectInput
            value={paramContext.region}
            options={localization}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="w-full md:w-1/4 p-2 md:p-3 md:py-3 flex flex-col space-y-2">
        <span className="text-sm text-neutral-500">Errors</span>
        <div className="flex flex-row">
          <RangeSlider
            errors={paramContext.errors}
            handleChange={handleErrorChange}
          />
          <input
            min={0}
            max={1000}
            type="text"
            onChange={handleErrorChange}
            className="p-2 text-sm w-1/3 ml-4 outline-none rounded bg-neutral-700 hover:bg-neutral-700/70 focus:ring-2 focus:ring-neutral-600"
            value={paramContext.errors}
          />
        </div>
      </div>
      <div className="w-full md:w-1/4 p-2 md:p-3 md:py-3 flex flex-col space-y-2">
        <span className="text-sm text-neutral-500">Seed</span>
        <div className="flex flex-row">
          <SeedInput
            value={paramContext.seeds}
            handleChange={handleSeedsChange}
          />
          <button
            onClick={generateRandomSeed}
            className="p-2 hover:bg-neutral-700/70 focus:ring-2 focus:ring-neutral-600 outline-none text-sm bg-neutral-700 rounded ml-2"
          >
            <LiaRandomSolid className="size-5" />
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/4 p-2 md:p-3 md:py-3 flex flex-col space-y-2">
        <span className="text-sm text-neutral-500">Export</span>
        <ExportCsvButton data={slice(users, 0, endOffset)} />
      </div>
    </div>
  );
}
