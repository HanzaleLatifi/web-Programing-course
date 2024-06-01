"use client";
import ImageSlider from '@/components/ImageSlider';
import { useGetMovies } from '@/hooks/useMove';
import Image from 'next/image'


export default function Home() {

  const { data, error, isLoading } = useGetMovies();

  return (
    <div className='w-full '>
      {/* image cover */}
      <section className='flex items-center m-4  '>
        <Image
          src="/images/cover.jpg"
          width={1400}
          height={300}
          alt="Picture of the author"
          className='rounded-lg'
        />
      </section>

      {/*  */}
      <section className='mx-4 my-14 space-y-10 overflow-hidden '>
        
        <div className='shadow-md'>
            <p className='text-xl text-white border-r-2 rounded-xl  border-primary w-fit px-4 my-1 '> جدیدترین ها </p>
            {isLoading ? <p>isLoading...</p> :<ImageSlider data={data}/> }
        </div>

        <div className='shadow-md'>
          <p className='text-xl text-white border-r-2 rounded-xl  border-primary w-fit px-4 my-1'> پربازدیدترین </p>
          {isLoading ? <p>isLoading...</p> :<ImageSlider data={data}/> }
        </div>

        <div className='shadow-md'>
          <p className='text-xl text-white border-r-2 rounded-xl  border-primary w-fit px-4 my-1 '> پیشنهادی </p>
          {isLoading ? <p>isLoading...</p> :<ImageSlider data={data}/> }
        </div>
        
      </section>
    </div>
  );
}
