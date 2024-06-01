"use client"
import PrimaryButton from '@/common/PrimaryButton';
import TextField from '@/common/TextField';
import http from '@/services/httpServices';
import axios from 'axios';
import React,{useState} from 'react'
import toast from 'react-hot-toast';

const AuthPage = () => {

  const [phoneNumber, setPhoneNumber] = useState();
  let isLoading=false;

  const submitHandler=async(e)=>{
    e.preventDefault();
    try {
      await axios.post('https://moviesapi.ir/api/v1/rregister',{email:'h.lssas@gmail.com',password:'1478964',name:'hanli'})
    } catch (error) {
      toast.error(error?.response)

    }
  }
  const inputChangeHandler=(e)=>{
   setPhoneNumber(e.target.value)
  }
  

  return (
    <div className='flex justify-center min-h-screen mt-8 sm:mt-14'>
      <div className='w-full sm:max-w-sm shadow-md rounded-md  p-4 h-min '>
      <form className="space-y-3" onSubmit={submitHandler}>
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
            <PrimaryButton type="submit" text="ثبت نام" otherClassNames="w-full mt-4">
              ارسال کد تایید
            </PrimaryButton>
          )}
        </div>
      </form>
    </div>
    </div>
  )
}

export default AuthPage