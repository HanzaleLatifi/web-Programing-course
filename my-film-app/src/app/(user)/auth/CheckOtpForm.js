import React from 'react'
import OtpInput from 'react-otp-input';
import PrimaryButton from '@/common/PrimaryButton';
import { ArrowRightCircleIcon } from '@heroicons/react/24/solid';
import { useAuthProvider } from '@/app/context/AuthContext';
import toast from 'react-hot-toast';



export const CheckOtpForm = ({isLoading,onSubmit,otp,setOtp , time,onResendOtp ,onBack,phoneNumber }) => {

    const{setUser}=useAuthProvider();
    

    const loginHandler=()=>{
        setUser(phoneNumber);
        toast.success('با موفقیت وارد حساب خود شدید')

    }
    
  return (
        <form className="space-y-3" onSubmit={onSubmit}>
            <div className='flex justify-between items-center text-gray-200'>
                <button onClick={onBack} className="mb-4">
                    <ArrowRightCircleIcon className='w-8 h-7'/>
                </button>
                <div className="mb-4 text-secondary-500">
                    {time > 0 ? (
                    <p>{time} ثانیه تا ارسال مجدد کد</p>
                    ) : (
                    <button onClick={onResendOtp}>ارسال مجدد کد؟</button>
                    )}
                </div>
            </div>
            <p className='text-gray-200 text-lg mb-4'>کد تایید را وارد کنید</p>
          
            <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={4}
                renderSeparator={<span className='text-gray-200'>-</span>}
                inputStyle={{
                    width: "2.8rem",
                    padding: "0.5rem 0.2rem",
                    border: "1px solid red",
                    borderRadius: "0.5rem",
                }}
                containerStyle="flex flex-row-reverse gap-x-2 justify-center text-lg"
                    renderInput={(props) => <input type='number' {...props} />}
                />

        <div className=''>
        {isLoading ? (
            <p>is isLoading ... </p>
        ) : (
            <PrimaryButton onClick={loginHandler} type="submit" text="تایید کد" otherClassNames="w-full mt-4"/>
        )}
        </div>
    </form>  )
    
}
