"use client";

const PrimaryButton = ({ otherClassNames, text , type , icon , onClick }) => {
  return (
    <button onClick={onClick} type={type || 'button'} className={` ${otherClassNames} transition-all px-5 py-3  bg-red-700 rounded-lg text-white text-lg hover:bg-red-800 flex items-center justify-center `}>
      {text} {icon && icon } 
    </button>
  );
};

export default PrimaryButton;
