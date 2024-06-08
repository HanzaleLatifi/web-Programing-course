"use client"
import FilmCard from '@/components/FilmCard';
import { useGetMovies } from '@/hooks/useMove'
import React from 'react';


const MovieList = () => {
    const { data, error, isLoading } = useGetMovies();
    if (isLoading) return <p>loading...</p>
    return (
     <div className='grid md:grid-cols-4 grid-cols-1 gap-6 p-4'>{data.map(move=>{
        return <div key={move.id}>
                <FilmCard movie={move}/>
              </div>
    })}</div>
  )
}

export default MovieList