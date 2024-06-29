import React from "react";

interface ContactDetailParams {
  title: string;
  titleClassName: string;
  content: string[];
  contentClassName: string;
}

export const ContactDetailComponent: React.FC<ContactDetailParams> = ({
  title,
  titleClassName,
  content,
  contentClassName,
}) => {
  return (
    <div className="mb-2">
      <div className={`text-[29.625px] mb-1 ${titleClassName} mt-4`}>
        {title}
      </div>
      {content.map((val) => (
        <div key={val} className={`text-[24.708px] ${contentClassName}`}>
          {val}
        </div>
      ))}
    </div>
  );
};
