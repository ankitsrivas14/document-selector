import { useState } from "react";

const Switch = () => {
    const [enabled, setEnabled] = useState(false);

    return <label className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={enabled}
          onChange={() => setEnabled(!enabled)}
        />
        <div className="block bg-gray-300 w-14 h-8 rounded-full"></div>
        <div
          className={`absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${
            enabled ? 'transform translate-x-full border-gray-300' : 'border-gray-400'
          }`}
        ></div>
      </div>
      <span className="ml-3 text-sm font-medium text-gray-700">Select All</span>
    </label>;
}

export default Switch;