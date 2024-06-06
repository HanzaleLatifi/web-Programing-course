"use client"
import React from 'react'
import { useParams } from 'next/navigation'
import { useGetMoviesByGenre } from '@/hooks/useMove';
import Image from 'next/image'
import PrimaryButton from '@/common/PrimaryButton';
import Link from 'next/link';


const page = () => {
    const{id} =useParams()
    const { data, isLoading:loadingMovie }=useGetMoviesByGenre(id);

    if(loadingMovie) return <p>loading ...</p>
    console.log(data)
    
    

    return (
    <div className='grid md:grid-cols-4 grid-cols-1 gap-y-6 gap-x-4 p-4'>
        {data.data.map(movie=>{
            return <div key={movie.id} className=' bg-slate-900 rounded-2xl shadow-2xl'>
                         <Image src={movie.poster} width={300} height={300}  loading='lazy' blurDataURL={movie.poster} alt={movie.title} />
                    <div className='p-2 '>
                        <h2 className='text-white text-center my-1 text-md '>{movie.title.length>20 ? movie.title.substring(movie.title.length-5) : movie.title}</h2>
                        <div className='flex items-center my-1 justify-center  '>
                            {movie.genres.map(tag=>{
                                return <span className='border-2 border-primary text-sm text-gray-400 rounded-full px-2 py-1 mx-0.5'>{tag}</span>
                            })}
                        </div>
                    </div>
                    <Link href={'/'}>
                      <PrimaryButton text={'اطلاعات بیشتر'} otherClassNames={'w-full rounded-t-none'}/>
                    </Link>
                 </div>
        })}
    </div>
    )
}

export default page



