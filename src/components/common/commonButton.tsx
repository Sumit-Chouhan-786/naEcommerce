"use client";

interface CommonButtonProps {
  text: string;
  className?: string;
  bg?: string; 
  onClick?: () => void;
}

const CommonButton = ({ text, className = "" }: CommonButtonProps) => {
  return (
    <button
      className={`px-10 py-2 text-white bg-[#DB4444] font-medium transition ${className}`}
    >
      {text}
    </button>
  );
};

export default CommonButton;
