export default function RangeSlider() {
  return (
    <div className="w-2/3">
      <div className="flex justify-between w-full">
        <span className="text-sm text-neutral-100">0</span>
        <span className="text-sm text-neutral-100">10</span>
      </div>
      <input
        type="range"
        className="h-2 w-full cursor-ew-resize appearance-none rounded-full bg-neutral-700 disabled:cursor-not-allowed"
      />
    </div>
  );
}
