"use client"
import React,{useState , useEffect} from 'react'
import toast from 'react-hot-toast';
import SendOtpForm from './SendOtpForm';
import { CheckOtpForm } from './CheckOtpForm';

const RESEND_TIME = 90;
const AuthPage = () => {

  const [phoneNumber, setPhoneNumber] = useState();
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState('');
  const [time, setTime] = useState(RESEND_TIME);

  
  let isLoading=false;

  const sendOtpHandler=async(e)=>{
    e.preventDefault();
    try {
      setStep(2);
      setTime(RESEND_TIME);
      setOtp("");
    } catch (error) {
      toast.error(error?.response)

    }
  }
  const checkOtpHandler=async(e)=>{
    e.preventDefault();
    try {
      
    } catch (error) {
      toast.error(error?.response)

    }
  }
  const inputChangeHandler=(e)=>{
   setPhoneNumber(e.target.value)
  }

  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);

  const renderStep=()=>{
    switch (step) {
      case 1:
        return <SendOtpForm inputChangeHandler={inputChangeHandler}
                onSubmit={sendOtpHandler} 
                phoneNumber={phoneNumber} 
                isLoading={isLoading} />
       
       case 2: 
         return <CheckOtpForm inputChangeHandler={''}
                otp={otp}
                setOtp={setOtp}
                onSubmit={checkOtpHandler} 
                isLoading={isLoading}
                time={time}
                onResendOtp={sendOtpHandler}
                onBack={() => setStep((s) => s - 1)}

                />
        
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