"use client";
import React from "react";
import { MagnifyingGlassCircleIcon ,UserCircleIcon } from "@heroicons/react/24/outline";
import SecondaryButton from "../common/SecondaryButton";
import Link from "next/link";
import { useAuthProvider } from "@/context/AuthContext";

const Header = () => {
  const {user}=useAuthProvider();
  return (
    <header className="bg-slate-900 p-6 w-full shadow-md ">
      <div className="flex items-center w-full justify-between ">
        <div className="flex items-center transition-all bg-slate-800 rounded-lg px-3 py-2 w-4/12 hover:w-5/12 duration-500 ">
          <input
            type="text"
            placeholder="جستجو فیلم، کارگردان، بازیگر و ..."
            className="w-full outline-none bg-slate-800  text-slate-200 "
          />

          <MagnifyingGlassCircleIcon className="w-8 h-8 text-slate-200" />
        </div>

        {/* Login Button */}
        <div className="flex items-center">
         {/* <button className={` transition-all px-4 py-2 border-2 border-red-700 rounded-lg text-red-700 hover:bg-red-700 hover:text-slate-200 `}>
          ورود / ثبت نام
        </button> */}
          {!user ? <Link href='/auth'>
           <SecondaryButton text={"ورود / ثبت نام"} otherClassNames={"ml-4"} />
          </Link> : <p className="ml-4 text-xl text-primary flex items-end ">{user} <UserCircleIcon className="h-9 w-9 mx-0.5 text-white"/> </p>  }
         
          <Link href="/buysub">
             <SecondaryButton text={"خرید اشتراک"} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
