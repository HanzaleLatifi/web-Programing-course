"use client"
import React from 'react'
import { useParams } from 'next/navigation'
import { useGetMoviesByGenre } from '@/hooks/useMove';

import FilmCard from '@/components/FilmCard';



const page = () => {
    const{id} =useParams()
    const { data, isLoading:loadingMovie }=useGetMoviesByGenre(id);

    if(loadingMovie) return <p>loading...</p>
    console.log(data)
    
    

    return (
    <div className='grid md:grid-cols-4 grid-cols-1 gap-6 p-4'>
        {data.data.map(movie=>{
            return <div key={movie.id}>
                        <FilmCard movie={movie}/>
                  </div> 
        })}
    </div>
    )
}

export default page



