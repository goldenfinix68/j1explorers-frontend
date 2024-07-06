import React from "react";
import { formatDate, formatDateToYYYYMMDD } from "../../utils/processDate";
interface DateRecordComponentProps {
  label: string;
  description: any;
  label_style?: string;
  input_style?: string;
  gap?: string;
  className?: string;
  icon: string;
  onInput: (val: string) => void;
}
export const DateRecordComponent: React.FC<DateRecordComponentProps> = ({
  label,
  description,
  label_style = "",
  input_style = "",
  gap = ":&nbsp;",
  className = "flex",
  icon,
  onInput,
}) => {
  return (
    <div className={className}>
      {icon && <img src={icon} className="w-fit h-fit mr-[3px]" />}
      <div
        className={`${label_style} w-fit whitespace-nowrap`}
      >{`${label}`}</div>
      <span className={label_style} dangerouslySetInnerHTML={{ __html: gap }} />
      <input
        className={`${input_style} grow overflow-hidden`}
        value={description ? formatDateToYYYYMMDD(new Date(description)) : ""}
        onChange={(e) => onInput(e.target.value)}
        type="date"
      />
    </div>
  );
};
