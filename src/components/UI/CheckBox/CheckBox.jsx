import { forwardRef } from "react";

const CheckBox = forwardRef(({saved, ...props }, ref) => {
  const baseClasses =
    "accent-[#4A148C] border border-gray-300 focus:outline-[#4A148C]";

  return (
    <input
    disabled={saved}
      type="checkbox"
      ref={ref}
      className={baseClasses}
      {...props}
    />
  );
});

export default CheckBox;
