"use client";
import React from "react";
import { MagnifyingGlassCircleIcon ,UserCircleIcon } from "@heroicons/react/24/outline";
import SecondaryButton from "../common/SecondaryButton";
import Link from "next/link";
import { useAuthProvider } from "@/context/AuthContext";
import DarkModeBtn from "./DarkModeBtn";

const Header = () => {
  const {user}=useAuthProvider();
  return (
    <header className="dark:bg-slate-900 bg-gray-200 p-6 w-full  ">
      <div className="flex items-center w-full justify-between ">
        <div className="flex items-center transition-all dark:bg-slate-800 bg-white  rounded-lg px-3 py-2 w-4/12 hover:w-5/12 duration-500 ">
          <input
            type="text"
            placeholder="جستجو فیلم، کارگردان، بازیگر و ..."
            className="w-full outline-none dark:bg-slate-800 bg-white  dark:text-slate-200 text-gray-700 "
          />

          <MagnifyingGlassCircleIcon className="w-8 h-8 dark:text-slate-200 text-gray-700" />
        </div>

        {/* Login Button */}
        <div className="flex items-center">
         {/* <button className={` transition-all px-4 py-2 border-2 border-red-700 rounded-lg text-red-700 hover:bg-red-700 hover:text-slate-200 `}>
          ورود / ثبت نام
        </button> */}
          <DarkModeBtn/>
          {!user ? <Link href='/auth'>
           <SecondaryButton text={"ورود / ثبت نام"} otherClassNames={"mx-4"} />
          </Link> : <p className="mx-4 text-xl text-primary flex items-end ">{user} <UserCircleIcon className="h-9 w-9 mx-0.5 dark:text-white text-gray-800"/> </p>  }
         
          <Link href="/buysub">
             <SecondaryButton text={"خرید اشتراک"} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
