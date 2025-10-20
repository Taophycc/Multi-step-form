import React from "react";

function SelectableBox({
  title,
  monthlyPrice,
  yearlyPrice,
  isSelected,
  onClick,
  billingCycle,
}) {
  // Determine the price and text based on the billing cycle
  const price = billingCycle === "monthly" ? monthlyPrice : yearlyPrice;
  const priceText =
    billingCycle === "monthly" ? `$${price}/mo` : `$${price}/yr`;

  const baseBoxStyles =
    "flex md:flex-col justify-between items-center p-4 w-full md:w-38 md: h-18 md:h-45 border rounded-lg md:p-5 cursor-pointer transition-all duration-200";

  const borderStyles = isSelected
    ? "border-blue-800 bg-blue-50"
    : "border-gray-300 hover:border-blue-800";

  return (
    <div className={`${baseBoxStyles} ${borderStyles}`} onClick={onClick}>
      <img
        className="md:mb-7"
        src={`/images/icon-${title.toLowerCase()}.svg`}
        alt={title}
      />
      <p className="text-blue-950 text-base mt-3 capitalize font-bold">
        {title}
      </p>
      <p className="text-gray-500 text-sm font-normal">{priceText}</p>
      {billingCycle === "yearly" && (
        <p className="text-blue-600 text-xs font-normal">2 months free</p>
      )}
    </div>
  );
}

export default SelectableBox;
