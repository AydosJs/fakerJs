"use client";
import { LiaRandomSolid } from "react-icons/lia";
import RangeSlider from "./RangeSlider";
import SeedInput from "./SeedInput";
import _ from "lodash"; // lodash library

import ReactSelectInput, {
  OnChangeFunction,
  ReactSelectTypes,
} from "./ReactSelectInput";
import { useEffect, useState } from "react";
import { useGlobalContext } from "@/context/Provider";
import { Params } from "@/types/types";
import axios from "axios";
import { localization } from "@/lib/utils";
import ExportCsvButton from "./ExportCsvButton";
import { useDebounce } from "@/lib/hooks";

interface AppState {
  errors: number;
  seeds: number;
  region: ReactSelectTypes;
}

export default function TableToolbar() {
  const context = useGlobalContext();
  const [state, setState] = useState<AppState>({
    errors: 0,
    seeds: 0,
    region: {
      value: "en_US",
      label: "English (United States)",
    },
  });
  const debouncedError = useDebounce(state.errors);
  const debouncedSeed = useDebounce(state.seeds);

  if (!context) {
    throw new Error("Component must be used within a Provider");
  }
  const { users, setUsers, setLoading } = context;

  const handleErrorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const parsedValue = parseInt(event.target.value, 10);
    const newValue = Math.max(0, Math.min(1000, parsedValue || 0));
    setState((prevState) => ({
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
    setState((prevState) => ({
      ...prevState,
      seeds: newValue,
    }));
  };

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const params: Params = {
        errors: state.errors,
        seed: state.seeds,
        region: state.region.value,
      };

      const res = await axios.get("http://localhost:3000/api/users", {
        params,
      });
      setUsers(res.data.users);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const handleChange: OnChangeFunction = (value) => {
    setState((prevState) => ({
      ...prevState,
      region: {
        value: value.value,
        label: value.label,
      },
    }));
  };

  const generateRandomSeed = () => {
    const randomNumber = window.crypto.getRandomValues(new Uint32Array(1))[0];

    setState((prevState) => ({
      ...prevState,
      seeds: randomNumber,
    }));
  };

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedError, debouncedSeed, state.region]);

  return (
    <>
      <div className="border-2 border-neutral-700 divide-x-2 font-semibold rounded-md mb-6 divide-neutral-700/40 bg-neutral-900 flex flex-row items-center">
        <div className="w-1/4 p-3 py-3 flex flex-col space-y-2">
          <span className="text-sm text-neutral-500">Region</span>
          <div>
            <ReactSelectInput
              value={state.region}
              options={localization}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="w-1/4 p-3 py-3 flex flex-col space-y-2">
          <span className="text-sm text-neutral-500">Errors</span>
          <div className="flex flex-row">
            <RangeSlider
              errors={state.errors}
              handleChange={handleErrorChange}
            />
            <input
              min={0}
              max={1000}
              type="text"
              onChange={handleErrorChange}
              className="p-2 text-sm w-1/3 ml-4 outline-none rounded bg-neutral-700 hover:bg-neutral-700/70 focus:ring-2 focus:ring-neutral-600"
              value={state.errors}
            />
          </div>
        </div>
        <div className="w-1/4 p-3 py-3 flex flex-col space-y-2">
          <span className="text-sm text-neutral-500">Seed</span>
          <div className="flex flex-row">
            <SeedInput value={state.seeds} handleChange={handleSeedsChange} />
            <button
              onClick={generateRandomSeed}
              className="p-2 hover:bg-neutral-700/70 focus:ring-2 focus:ring-neutral-600 outline-none text-sm bg-neutral-700 rounded ml-2"
            >
              <LiaRandomSolid className="size-5" />
            </button>
          </div>
        </div>
        <div className="w-1/4 p-3 py-3 flex flex-col space-y-2">
          <span className="text-sm text-neutral-500">Export</span>
          <ExportCsvButton data={users} />
        </div>
      </div>
    </>
  );
}
