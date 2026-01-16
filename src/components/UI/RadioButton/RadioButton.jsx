import React from "react";

const RadioButton = React.forwardRef(
  ({ value, children,saved, ...props }, ref) => {
if(!saved){
      return (
      <label className="flex items-center gap-2 cursor-pointer mb-2 ml-3">
        <input
          ref={ref}
          type="radio"
          value={value}
          className="scale-125 accent-[#4A148C] focus:ring-0 cursor-pointer"
          {...props}

        />
        {children}
      </label>
    );
}else{
      return (
      <label className="flex items-center gap-2 cursor-pointer mb-2 ml-3">
        <input
          ref={ref}
          disabled
          type="radio"
          value={value}
          className="scale-125 accent-[#4A148C] focus:ring-0 cursor-pointer"
          {...props}

        />
        {children}
      </label>
    );
}
  }
);

export default RadioButton;
