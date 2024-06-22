"use client";
import React, { useState } from 'react';
import { useGetGenres } from '@/hooks/useGenre';
import { useGetMoviesByGenre } from '@/hooks/useMove';
import Link from 'next/link';



 
export default function Category  ()  {
const [genre, setGenre] = useState('');
const { data:genres, error, isLoading:loadingGenres } =useGetGenres();



 if(loadingGenres) return <p className=''>loading</p>
  return (
    <div className='m-4 '>
       <p className='text-white font-2xl my-6'>ژانر موردنظر خود را انتخاب کنید</p>
       <section className='grid grid-cols-6 gap-4 mx-4'>
        {genres.map(genre=>{
            return <Link href={`/category/${genre.id}`} key={genre.id}>
                        <div  className='flex justify-center text-lg tracking-widest items-center w-36 h-24 rounded-xl bg-gradient-to-r from-slate-900 to-red-600 text-white' >{genre.name}</div>
                   </Link>
          })}
       </section>
     
    </div>
  )
}
