import React from "react";

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const baseStyles =
    "px-6 py-3 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg";

  const variants = {
    primary: "bg-primary-500 hover:bg-primary-600 text-white",
    accent: "bg-accent-400 hover:bg-accent-500 text-primary-900",
    outline:
      "border-2 border-primary-500 hover:bg-primary-500 text-primary-500 hover:text-white",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}>
      {children}
    </button>
  );
}
