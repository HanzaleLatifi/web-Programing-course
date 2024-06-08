"use client"
import React from 'react';
import Image from 'next/image'
import PrimaryButton from '@/common/PrimaryButton';
import Link from 'next/link';



const FilmCard = ({movie}) => {
         return (
                <div  className='bg-slate-900 rounded-2xl shadow-2xl'>
                     <Image src={movie.poster} width={300} height={300} style={{maxHeight:'270px'}}  loading='lazy' blurDataURL={movie.poster} alt={movie.title} />
                        <div className='p-2 '>
                            <h2 className='text-white text-center my-1 text-md '>{movie.title.length>23 ? movie.title.substring(0,20) : movie.title}</h2>
                            <div className='flex items-center my-1 justify-center  '>
                                {movie.genres.map(tag=>{
                                    return <span key={tag} className='border-2 border-primary text-sm text-gray-400 rounded-full px-2 py-1 mx-0.5'>{tag}</span>
                                })}
                            </div>
                        </div>
                     <Link href={`/movies/${movie.id}`}>
                      <PrimaryButton text={'اطلاعات بیشتر'} otherClassNames={'w-full rounded-t-none'}/>
                    </Link>
                 </div>  )
  
}

export default FilmCard