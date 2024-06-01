import React from 'react'
import TextField from '@/common/TextField';
import PrimaryButton from '@/common/PrimaryButton';

export const CheckOtpForm = ({isLoading  }) => {
  return (
        <form className="space-y-3" onSubmit={()=>{console.log('submit')}}>
        <TextField
            label="شماره موبایل"
            name="phoneNumber"
            value={''}
            onChange={()=>{console.log('تایید')}}
        />


        <div className=''>
        {isLoading ? (
            <p>is isLoading ... </p>
        ) : (
            <PrimaryButton type="submit" text="تایید کد" otherClassNames="w-full mt-4"/>
        )}
        </div>
    </form>  )
    
}
