import React from 'react'
import TextField from '@/common/TextField';
import PrimaryButton from '@/common/PrimaryButton';


const SendOtpForm = ({onSubmit , phoneNumber , inputChangeHandler , isLoading}) => {

  
  return (
            <form className="space-y-3" onSubmit={onSubmit}>
                <TextField
                    label="شماره موبایل"
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={inputChangeHandler}
                />
            
            
                <div className=''>
                {isLoading ? (
                    <p>is isLoading ... </p>
                ) : (
                    <PrimaryButton  type="submit" text="ارسال کد تایید" otherClassNames="w-full mt-4"/>
                )}
                </div>
            </form>  )
}

export default SendOtpForm