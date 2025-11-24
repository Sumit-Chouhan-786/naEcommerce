import React from "react";

interface SubHeadingProps {
  children: React.ReactNode;   
  className?: string;          
}

const SubHeading: React.FC<SubHeadingProps> = ({ children, className }) => {
  return (
    <h2 className={`text-center text-3xl font-bold text-gray-900 mb-4 ${className || ""}`}>
      {children}
    </h2>
  );
};

export default SubHeading;
