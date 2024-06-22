import React from 'react';
import SecondaryButton from '@/common/SecondaryButton';

const SubCard = ({silver, price , text , BPrice , otherContainerClassNames,mounth,detail }) => {
  return (
    <div className={`bg-slate-900 relative flex justify-between items-center border border-primary rounded-md px-4 py-3 ${otherContainerClassNames}`}>
      <span className='-mt-20 p-1 text-sm text-slate-300 rounded-2xl bg-slate-700 absolute'>{detail}</span>
        <div className='flex items-center'>
            <span className={`${silver?'bg-slate-500':'bg-golden-gradient'}  w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold`}>{mounth}</span>
            <p className={`${silver? 'text-slate-500':'text-yellow-600'} mr-2 `}>{text}</p>
        </div>
        <div className='flex items-center '>
            <p  className={`${silver? 'text-slate-600':'text-yellow-600'} line-through ml-4`}>{BPrice}</p>
            <SecondaryButton text={price} otherClassNames={'text-xl'}  />
        </div>
    </div>
  )
}

export default SubCard