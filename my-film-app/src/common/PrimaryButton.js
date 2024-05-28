"use client";

const PrimaryButton = ({ otherClassNames, text , type }) => {
  return (
    <button type={type || 'button'} className={` ${otherClassNames} transition-all px-5 py-3  bg-red-700 rounded-lg text-white text-lg hover:bg-red-800 `}>
      {text}
    </button>
  );
};

export default PrimaryButton;