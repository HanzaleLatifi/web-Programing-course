"use client";
import React from 'react';
import { useGetGenres } from '@/hooks/useGenre';



 
export default function Category  ()  {

const { data, error, isLoading } =useGetGenres();
console.log(data);

if(isLoading) return <p>loading</p>

 
  
  return (
    <div className='m-4  '>
       <p className='text-white font-2xl my-6'>ژانر موردنظر خود را انتخاب کنید</p>
       <section className='grid grid-cols-6 gap-4 mx-4'>
        {data.map(genre=>{
            return <div key={genre.id} className='flex justify-center text-lg tracking-widest items-center w-36 h-24 rounded-xl bg-gradient-to-r from-slate-900 to-red-600 text-white' >{genre.name}</div>
          })}
       </section>
     
    </div>
  )
}
