import {
  ClearIndicatorProps,
  DropdownIndicatorProps,
  components,
} from "react-select";
import { IoIosClose } from "react-icons/io";
import Select from "react-select/base";
import { MdKeyboardArrowDown } from "react-icons/md";
import { cn } from "@/lib/utils";

const DropdownIndicator = (props: DropdownIndicatorProps) => {
  return (
    <components.DropdownIndicator {...props}>
      <MdKeyboardArrowDown />
    </components.DropdownIndicator>
  );
};

const ClearIndicator = (props: ClearIndicatorProps) => {
  return (
    <components.ClearIndicator {...props}>
      <IoIosClose />
    </components.ClearIndicator>
  );
};

const controlStyles = {
  base: "border rounded-lg bg-neutral-800 hover:cursor-pointer",
  focus: "border-primary-600 ring-1 ring-primary-500 bg-red-500",
  nonFocus: "border-gray-300 hover:border-gray-400",
};
const placeholderStyles = "text-gray-500 pl-1 py-0.5";
const selectInputStyles = "pl-1 py-0.5";
const valueContainerStyles = "p-1 gap-1";
const singleValueStyles = "leading-7 ml-1";
const indicatorsContainerStyles = "p-1 gap-1";
const clearIndicatorStyles =
  "text-gray-500 p-1 rounded-md hover:bg-red-50 hover:text-red-800";
const indicatorSeparatorStyles = "bg-gray-300";
const dropdownIndicatorStyles =
  "p-1 hover:bg-gray-100 text-gray-500 rounded-md hover:text-black";
const menuStyles = "p-1 mt-2 border border-gray-200 bg-neutral-800 rounded-lg";
const groupHeadingStyles = "ml-3 mt-2 mb-1 text-gray-500 text-sm";
const optionStyles = {
  base: "hover:cursor-pointer px-3 py-2 rounded",
  focus: "bg-gray-100 active:bg-gray-200",
  selected: "after:content-['✔'] after:ml-2 after:text-green-500 text-gray-500",
};
const noOptionsMessageStyles =
  "text-gray-500 p-2 bg-gray-50 border border-dashed border-gray-200 rounded-sm";

const ReactSelect = (props: any) => (
  <Select
    closeMenuOnSelect={false}
    hideSelectedOptions={false}
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
    components={{ DropdownIndicator, ClearIndicator }}
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
      indicatorsContainer: () => indicatorsContainerStyles,
      clearIndicator: () => clearIndicatorStyles,
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

export default ReactSelect;
