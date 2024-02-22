import { cn } from "@/lib/utils";
import { FakerMap } from "@/types/types";
import Select from "react-select";

const controlStyles = {
  base: "rounded hover:cursor-pointer dark:border-none truncate bg-neutral-700 text-sm hover:bg-neutral-700/70 ",
  focus: "ring-2 ring-neutral-600",
  nonFocus: "",
};
const placeholderStyles = "text-neutral-400 p-2 px-2";
const selectInputStyles = "pl-2 py-2";
const valueContainerStyles = "";
const multiValueStyles =
  "rounded items-center pl-2 pr-2 gap-1.5 bg-gray-200 dark:bg-slate-700";
const multiValueLabelStyles = "";
const indicatorsContainerStyles = "";
const indicatorSeparatorStyles = "bg-neutral-600 hidden";
const dropdownIndicatorStyles = "px-2 text-neutral-400";
const menuStyles =
  "p-1 mt-2 border-2 border-neutral-700 text-sm bg-neutral-800 rounded";
//   option items
const singleValueStyles = "px-2";
const optionStyles = {
  base: "hover:cursor-pointer p-2 py-2 rounded hover:bg-neutral-700/50 first:mt-0 mt-1",
  focus: "bg-neutral-700/50",
  selected: "bg-neutral-700",
};

const groupHeadingStyles = "ml-3 mt-2 mb-1 text-gray-500 text-sm";
const noOptionsMessageStyles =
  "text-gray-500 p-2 bg-gray-50 border border-dashed border-gray-200 rounded-sm";

export type ReactSelectTypes = {
  value: keyof FakerMap;
  label: string;
};

export type OnChangeFunction = (value: ReactSelectTypes) => void;

const ReactSelectInput = (props: any) => {
  return (
    <Select
      components={{
        IndicatorSeparator: () => null,
      }}
      unstyled
      styles={{
        input: (base) => ({
          ...base,
          "input:focus": {
            boxShadow: "none",
          },
        }),
        multiValueLabel: (base) => ({
          ...base,
          whiteSpace: "normal",
          overflow: "visible",
        }),
        control: (base) => ({
          ...base,
          transition: "none",
        }),
      }}
      classNames={{
        control: ({ isFocused }) =>
          cn(
            isFocused ? controlStyles.focus : controlStyles.nonFocus,
            controlStyles.base
          ),
        placeholder: () => placeholderStyles,
        input: () => selectInputStyles,
        valueContainer: () => valueContainerStyles,
        singleValue: () => singleValueStyles,
        multiValue: () => multiValueStyles,
        multiValueLabel: () => multiValueLabelStyles,
        indicatorsContainer: () => indicatorsContainerStyles,
        indicatorSeparator: () => indicatorSeparatorStyles,
        dropdownIndicator: () => dropdownIndicatorStyles,
        menu: () => menuStyles,
        groupHeading: () => groupHeadingStyles,
        option: ({ isFocused, isSelected }) =>
          cn(
            isFocused && optionStyles.focus,
            isSelected && optionStyles.selected,
            optionStyles.base
          ),
        noOptionsMessage: () => noOptionsMessageStyles,
      }}
      {...props}
    />
  );
};

export default ReactSelectInput;
