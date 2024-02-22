"use client";
import { LiaRandomSolid } from "react-icons/lia";

import RangeSlider from "./RangeSlider";
import SeedInput from "./SeedInput";

import ReactSelectInput, {
  OnChangeFunction,
  ReactSelectTypes,
} from "./ReactSelectInput";
import { useEffect, useState } from "react";
import { useGlobalContext } from "@/context/Provider";
import { FakerMap, Params } from "@/types/types";
import axios from "axios";
import { localization } from "@/lib/utils";

export default function TableToolbar() {
  const [errors, setErrors] = useState<number>(0);
  const [seeds, setSeeds] = useState<number>(0);
  const [region, setRegion] = useState<ReactSelectTypes>({
    value: "en_US",
    label: "English (United States)",
  });

  const context = useGlobalContext();

  if (!context) {
    throw new Error("Component must be used within a Provider");
  }
  const { setUsers } = context;

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

  const fetchUsers = async () => {
    try {
      const params: Params = {
        errors: errors,
        seed: seeds,
        region: region.value,
      };

      const res = await axios.get("http://localhost:3000/api/users", {
        params,
      });
      setUsers(res.data.users);
    } catch (error) {}
  };

  const handleChange: OnChangeFunction = (value) => {
    setRegion(() => {
      return {
        value: value.value,
        label: value.label,
      };
    });
  };

  useEffect(() => {
    fetchUsers();
  }, [errors, seeds, region]);

  return (
    <div className="border-2 border-neutral-700 divide-x-2 font-semibold rounded-md mb-6 divide-neutral-700/40 bg-neutral-900 flex flex-row items-center">
      <div className="w-1/4 p-3 py-3 flex flex-col space-y-2">
        <span className="text-sm text-neutral-500">Region</span>
        <div>
          <ReactSelectInput
            value={region}
            options={localization}
            onChange={handleChange}
          />
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
