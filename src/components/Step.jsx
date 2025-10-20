import React from "react";

export function Step({ number, title, activeStep }) {
  const isActive = activeStep === number;

  const numberCircleBaseStyle =
    "w-8 h-8 border border-white rounded-full flex flex-start items-center justify-center mr-3";
  const numberCircleActiveStyle = "bg-blue-200 border-blue-200 text-blue-900";

  return (
    <div className="flex items-center">
      <div
        className={`${numberCircleBaseStyle}  ${
          isActive ? numberCircleActiveStyle : "text-white"
        }`}
      >
        {number}
      </div>
      <div className="hidden md:block">
        <p className="text-left text-xs text-gray-300">STEP {number}</p>
        <p className="font-bold text-white">{title}</p>
      </div>
    </div>
  );
}
