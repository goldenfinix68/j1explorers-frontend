import React from "react";
interface DividerComponentProps {
  className?: string;
}
export const DividerComponent: React.FC<DividerComponentProps> = ({
  className,
}) => {
  return <div className={`${className} border`}></div>;
};
