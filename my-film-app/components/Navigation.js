"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  HomeIcon,
  MagnifyingGlassIcon,
  HeartIcon,
  ListBulletIcon,
} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (activePathname) => {
    return pathname === activePathname
      ? "text-red-700 border-r-2 rounded-2xl p-1 "
      : "text-white";
  };

  return (
    <nav className="bg-slate-900 text-white py-4 px-6 sticky min-h-screen shadow-2xl ">
      <div className=" flex flex-col items-start space-y-3 text-lg  ">
        <div className="text-4xl mb-8 py-2 pl-4 h">لوگو</div>

        <Link
          href="/"
          className={`flex items-center py-2 pl-4 hover:hover-text     ${isActive(
            "/"
          )}`}
        >
          <HomeIcon className="h-6 w-6 mx-1" />
          <span className="font-semibold ">خانه</span>
        </Link>
        <Link
          href="/category"
          className={`flex items-center py-2 pl-4 hover:hover-text  ${isActive(
            "/category"
          )}`}
        >
          <ListBulletIcon className="h-6 w-6 mx-1" />
          <span className="font-semibold">دسته بندی</span>
        </Link>
        <Link
          href="/favorites"
          className={`flex items-center py-2 pl-4 hover:hover-text  ${isActive(
            "/favorites"
          )}`}
        >
          <HeartIcon className="h-6 w-6 mx-1" />
          <span className="font-semibold">علاقمندی ها</span>
        </Link>
        <Link
          href="/serach"
          className={`flex items-center py-2 pl-4 hover:hover-text  ${isActive(
            "/search"
          )}`}
        >
          <MagnifyingGlassIcon className="h-6 w-6 mx-1" />
          <span className="font-semibold">جستجوی پیشرفته</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
