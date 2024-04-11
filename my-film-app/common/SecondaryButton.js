"use client";

const SecondaryButton = ({ otherClassNames, text }) => {
  return (
    <button className={` ${otherClassNames} transition-all px-4 py-2 border-2 border-red-700 rounded-lg text-red-700 hover:bg-red-700 hover:text-slate-200 `}>
      {text}
    </button>
  );
};

export default SecondaryButton;
