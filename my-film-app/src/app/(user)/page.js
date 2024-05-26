import Image from 'next/image'

export default function Home() {
  return (
    <div className='w-full '>
      <div className='flex items-center m-4  '>
        <Image
          src="/images/cover.jpg"
          width={1400}
          height={300}
          alt="Picture of the author"
          className='rounded-lg'
        />
      </div>
    </div>
  );
}
