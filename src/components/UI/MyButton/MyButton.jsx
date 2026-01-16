const MyButton = ({ children, type = "button", onClick }) => {
  return (
    <button
    type={type}
      onClick={onClick}
      className="h-7 w-40 text-white bg-[#4A148C] mt-6 mb-3 rounded-xl focus:bg-black hover:bg-yellow-500">
      {children}
    </button>
  )
}

export default MyButton
