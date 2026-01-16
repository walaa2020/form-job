import React from "react"

const TextArea = React.forwardRef(({ cols, rows,saved, ...rest }, ref) => {
  const baseClasses = " rounded-lg p-2 border border-gray-300 focus:outline-[#4A148C] focus:ring-0 focus:border-gray-300 "
  return (
    <textarea
      ref={ref}

      className={baseClasses}
       disabled={saved}
      rows={rows}
      cols={cols}
      {...rest}
 
    />

  )
});

export default TextArea
