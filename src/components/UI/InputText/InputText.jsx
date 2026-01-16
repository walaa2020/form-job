import React from "react";

const InputText = React.forwardRef(
  ({ placeholder, className = "", type, id, style,saved, ...props }, ref) => {

    const baseClasses =
      "w-100  h-10  p-2 border border-gray-300  rounded-lg focus:outline-[#4A148C] focus:ring-0 focus:border-gray-300";
if(!saved)
   { return (
      <input
        ref={ref}
        id={id}
        type={type}
        placeholder={placeholder}
        className={`${baseClasses} ${className}`}
        style={style}
        {...props}
      
      />
    );}
    else{
     return (
      <input
        ref={ref}
        id={id}
        disabled
        type={type}
        placeholder={placeholder}
        className={`${baseClasses} ${className}`}
        style={style}
        {...props}
      
      /> 
);}
  }
);

export default InputText;
