import React from "react";
interface RecordComponentProps {
  title: string;
  description: any;
  title_style: string;
  description_style: string;
  gap: string;
  className: string;
}
export const RecordComponent: React.FC<RecordComponentProps> = ({
  title,
  description,
  title_style,
  description_style,
  gap,
  className,
}) => {
  return (
    <div className={className}>
      <div className={`${title_style}`}>{`${title}${gap}`}</div>
      <div className={`${description_style}`}>{description}</div>
    </div>
  );
};
