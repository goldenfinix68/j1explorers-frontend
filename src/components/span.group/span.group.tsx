import React from "react";
import { SpanGroupProps } from "./type";

export const SpanGroup: React.FC<SpanGroupProps> = ({
  content,
  className = "",
}) => {
  return (
    <div className={className}>
      {content.map(({ className, title }) => (
        <span className={className || ""}>{title}</span>
      ))}
    </div>
  );
};
