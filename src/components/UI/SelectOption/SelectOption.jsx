import React from "react";

const SelectOption = React.forwardRef(
  ({ options = [], className, id,saved, ...props }, ref) => {
   if(!saved){
    return (
      <select
        ref={ref}
        id={id}
        className={className}
        {...props}
      >
        <option value="">Select gender</option>

        {options.map((el, idx) => (
          <option key={idx} value={el}>
            {el}
          </option>
        ))}
      </select>
    );}
    else{
      return (
      <select
        ref={ref}
        id={id}
        disabled
        className={className}
        {...props}
      >
        <option value="">Select gender</option>

        {options.map((el, idx) => (
          <option key={idx} value={el}>
            {el}
          </option>
        ))}
      </select>
    );
 

    }
  }
);

export default SelectOption;
