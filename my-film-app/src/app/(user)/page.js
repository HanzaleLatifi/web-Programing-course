import Image from 'next/image'

export default function Home() {
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
      {/* suggest */}
      <section>
        
 
      </section>
    </div>
  );
}
