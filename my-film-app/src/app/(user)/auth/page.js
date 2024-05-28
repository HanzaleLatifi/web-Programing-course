"use client"
import PrimaryButton from '@/common/PrimaryButton';
import TextField from '@/common/TextField'
import React from 'react'

const AuthPage = () => {

  let isLoading=false;

  const submitHandler=(e)=>{
    e.preventDeafult();
    console.log(e.tagert)
  }
  const inputChangeHandler=(e)=>{
    console.log(e)
  }

  return (
    <div className='flex justify-center min-h-screen mt-8 sm:mt-14'>
      <div className='w-full sm:max-w-sm shadow-md rounded-md  p-4 h-min '>
      <form className="space-y-10" onSubmit={submitHandler}>
        <TextField
          label="شماره موبایل"
          name="phoneNumber"
          value={''}
          onChange={inputChangeHandler}
        />
        <div>
          {isLoading ? (
            <p>is isLoading ... </p>
          ) : (
            <PrimaryButton type="submit" text="ثبت نام" otherClassNames="w-full">
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