import React from "react";
function Button({
  children,
  onClick,
  type = "button",
  className = "",
  variant = "primary",
  disabled = false,
  form = "",
}) {
  const baseStyles =
    "font-medium text-base rounded-[5px] md:rounded-lg transition-all duration-300 active:scale-95 active:translate-y-[0.01rem] shadow-md cursor-pointer";

  const variantStyles = {
    primary: "bg-blue-950 text-white hover:bg-blue-900 px-3 md:px-6  md:py-3 py-3 text-sm",
    secondary:
      "bg-white text-gray-400 hover:text-blue-900 px-6 py-3 shadow-none text-sm",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      form={form}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
