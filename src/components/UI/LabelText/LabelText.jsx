const LabelText = ({ children, className = "" }) => {
  const baseClasses = " mt-4 mb-2 font-semibold";
  return (
    <div className={`${baseClasses}${className}`}>
      <label > {children}</label>
    </div>
  )
}

export default LabelText
