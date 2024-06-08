'use client'
import { useGetMovieById } from '@/hooks/useMove';
import React from 'react';
import { useParams } from "next/navigation";
import Image from 'next/image'
import PrimaryButton from '@/common/PrimaryButton';
import { PlayIcon ,ArrowDownTrayIcon} from '@heroicons/react/24/outline';



const Movie = () => {
    const{id}=useParams();
    const{data:movie , isLoading}=useGetMovieById(id);
    if(isLoading) return <p>loading...</p>

  return (
    <section className='bg-slate-800 p-6 flex    '>

         <div className='w-1/2 mx-0 md:mx-4 '> 
              <h2 className=' text-xl text-yellow-500 border-b border-yellow-500 pb-2 mb-2 tracking-wider'>نام فیلم : {movie.title}</h2>
              <div className='space-y-2 text-gray-300 mb-6'>
                <p> <span className='text-primary px-1'>*</span>سال : {movie.released} </p>
                <p> <span className='text-primary px-1'>*</span>کشور سازنده : {movie.country} </p>
                <p> <span className='text-primary px-1'>*</span>امتیاز : {movie.imdb_rating} </p>
                <p> <span className='text-primary px-1'>*</span>مدت زمان : {movie.runtime} </p>
                <p> <span className='text-primary px-1'>*</span>کارگردان : {movie.director} </p>
                <p> <span className='text-primary px-1'>*</span>بازیگران : {movie.actors} </p>
                <p> <span className='text-primary px-1'>*</span>خلاصه فیلم : {movie.plot} </p>
              </div>
              <div className='flex items-center '>
                <PrimaryButton icon={<ArrowDownTrayIcon className='h-6 w-6 mx-1'/>} text={'دانلود فیلم'} otherClassNames={'w-auto ml-6'}/>
                <PrimaryButton  icon={<PlayIcon className='h-6 w-6 mx-1'/>} text={'تماشای آنلاین'} otherClassNames={'w-auto'}/>
              </div>

        </div>

        <div className='w-1/2'> 
            <div className='grid grid-cols-3 gap-2'>  
              <div className='col-span-1 grid grid-cols-1 gap-2'>
                  {movie.images.map(image=>{
                    return <Image key={image} src={image} height={100} width={100} style={{width:'100%',height:'100%',borderRadius:'1rem'}}/>
              })}
             </div>
             <div className='col-span-2'>
                 <Image className='' width={300} height={300} src={movie.poster} style={{borderRadius:'1rem'}}/>
                </div>
            </div>         
        </div>

    </section>
  )
}

export default Movie;