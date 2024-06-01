"use client"
import axios from 'axios';
import React,{useState} from 'react'
import toast from 'react-hot-toast';
import SendOtpForm from './SendOtpForm';
import { CheckOtpForm } from './CheckOtpForm';

const AuthPage = () => {

  const [phoneNumber, setPhoneNumber] = useState();
  const [step, setStep] = useState(1);
  
  let isLoading=false;

  const submitHandler=async(e)=>{
    e.preventDefault();
    try {
      setStep(2)
    } catch (error) {
      toast.error(error?.response)

    }
  }
  const inputChangeHandler=(e)=>{
   setPhoneNumber(e.target.value)
  }

  const renderStep=()=>{
    switch (step) {
      case 1:
        return <SendOtpForm inputChangeHandler={inputChangeHandler}
                submitHandler={submitHandler} 
                phoneNumber={phoneNumber} 
                isLoading={isLoading} />
       
       case 2: 
         return <CheckOtpForm inputChangeHandler={''}
                submitHandler={''} 
                phoneNumber={phoneNumber} 
                isLoading={isLoading} />
        
      default: return null
       
    }

  }

  return (
    <div className='flex justify-center min-h-screen mt-8 sm:mt-14'>
      <div className='w-full sm:max-w-sm shadow-md rounded-md  p-4 h-min '>
        {renderStep()}
     </div>
    </div>
  )
}

export default AuthPage