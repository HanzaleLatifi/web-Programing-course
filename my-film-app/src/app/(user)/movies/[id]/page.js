'use client'
import { useGetMovieById } from '@/hooks/useMove';
import React from 'react';
import { useParams } from "next/navigation";


const Movie = () => {
    const{id}=useParams();
    const{data , isLoading}=useGetMovieById(id);
    if(isLoading) return <p>loading...</p>
    console.log(data)

  return (
    <div></div>
  )
}

export default Movie;