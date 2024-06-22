
import SubCard from '@/components/SubCard';
import React from 'react';

const page = () => {
  return (
    <div className='flex justify-center min-h-screen mt-8 sm:mt-14'>
        <div className='w-full sm:max-w-lg shadow-md rounded-md  p-4 h-min '>
            <h2 className='text-center text-white text-xl mb-8'> خرید اشتراک </h2>
                <SubCard mounth={'1'} silver price={'50,000'} BPrice={'88,000'}  text={'سرویس نقره ای یک ماهه'} detail={'ویژه کاربران جدید'} otherContainerClassNames={'mb-6'}/>
                <SubCard mounth={'1'}   price={'70,000'} BPrice={'98,000'}  text={'سرویس طلایی یک ماهه'} detail={'ویژه کاربران جدید'} otherContainerClassNames={'mb-6'}/>        
                <SubCard mounth={'3'} silver price={'150,000'} BPrice={'180,000'}  text={'سرویس نقره ای سه ماهه'} detail={'ویژه کاربران جدید'} otherContainerClassNames={'mb-6'}/>
                <SubCard mounth={'3'}   price={'170,000'} BPrice={'288,000'}  text={'سرویس طلایی سه ماهه'} detail={'ویژه کاربران جدید'} otherContainerClassNames={'mb-6'}/>        
                <SubCard mounth={'6'} silver price={'370,000'} BPrice={'480,000'}  text={'سرویس نقره ای شش ماهه'} detail={'ویژه کاربران جدید'} otherContainerClassNames={'mb-6'}/>
                <SubCard mounth={'6'}   price={'420,000'} BPrice={'530,000'}  text={'سرویس طلایی شش ماهه'} detail={'ویژه کاربران جدید'} otherContainerClassNames={'mb-6'}/>        
        </div>
  </div>
  )
}

export default page