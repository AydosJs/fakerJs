type Props = {
  value: number;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
function SeedInput({ value, handleChange }: Props) {
  return (
    <input
      min={0}
      value={value}
      onChange={handleChange}
      type="text"
      className="outline-none p-2 text-sm rounded bg-neutral-700 w-full"
    />
  );
}

export default SeedInput;
