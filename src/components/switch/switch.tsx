import React from "react";
import "./switch.css";

interface SwitchProps {
  title: string;
  status: boolean;
  setStatus: (status: boolean) => void;
}

const Switch: React.FC<SwitchProps> = ({ title, status, setStatus }) => {
  return (
    <div className="flex items-center justify-between">
      <label htmlFor="id_toggle_field">{title}</label>
      <div className="toggle-switch">
        <input
          type="checkbox"
          id="id_toggle_field"
          name="toggle_field"
          checked={status}
          onChange={(e) => setStatus(e.target.checked)}
        />
        <label
          className={`slider round border ${
            status ? "border-darkgreen" : "border-darkyellow"
          }`}
          htmlFor="id_toggle_field"
        >
          <span className="toggle-on text-darkgreen">YES</span>
          <span className="toggle-off text-darkyellow">NO</span>
        </label>
      </div>
    </div>
  );
};

export default Switch;
