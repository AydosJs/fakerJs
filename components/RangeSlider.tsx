type Props = {
  errors: number;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function RangeSlider({ errors, handleChange }: Props) {
  return (
    <div className="w-2/3 bg-neutral-700 p-2 flex items-center justify-center rounded">
      <input
        value={errors}
        min={0}
        max={1000}
        type="range"
        className="h-2 w-full accent-neutral-400 hover:accent-neutral-300 cursor-ew-resize appearance-none rounded-full bg-neutral-500 disabled:cursor-not-allowed"
        onChange={handleChange} // Attach the handleChange function to the onChange event
      />
    </div>
  );
}
