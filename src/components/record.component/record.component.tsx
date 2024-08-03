import React from "react";

interface RecordComponentProps {
  label: string;
  description: any;
  label_style?: string;
  description_style?: string;
  gap?: string;
  className?: string;
}

export const RecordComponent: React.FC<RecordComponentProps> = ({
  label,
  description,
  label_style = "",
  description_style = "",
  gap = ":&nbsp;",
  className = "flex",
}) => {
  return (
    <div className={className}>
      <div className={label_style}>{`${label}`}</div>
      <span className={label_style} dangerouslySetInnerHTML={{ __html: gap }} />
      <div className={description_style}>{description}</div>
    </div>
  );
};
