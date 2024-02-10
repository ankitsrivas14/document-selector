import React from "react";

interface SwitchProps {
  toggleSwitch: (state: boolean) => void;
  enabled: boolean;
  children?: React.ReactNode;
}

const Switch = (props: SwitchProps) => {
    const { enabled, toggleSwitch, children } = props;

    return <label className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={enabled}
          onChange={() => toggleSwitch(!enabled)}
        />
        <div className={`block w-14 h-8 rounded-full ${enabled ? 'bg-accent-dark' : 'bg-gray-200'}`}></div>
        <div
          className={`absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${
            enabled ? 'transform translate-x-full border-gray-300' : 'border-gray-400'
          }`}
        ></div>
      </div>
     {children && <span className="ml-3 text-sm font-medium text-gray-700">{children}</span>}
    </label>;
}

export default Switch;