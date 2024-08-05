import Image from 'next/image'
import landingImg from '@/images/illustration-intro.png'

function Landing() {
  return (
    <section className='mt-[200px] flex justify-center items-center flex-col'>
      <div>
        <Image src={landingImg} width={'60%'} height={400} alt='landing' />
      </div>
      <h1 className='text-center mt-10 font-semibold'>
        All your file in secure location,<br /> accessible any where.  
      </h1>
      <p className='text-center opacity-[0.9] text-lg leading-[20px] md:w-[600px] max-w-full  mt-7'>
        Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, sint?
        ipsum dolor sit amet consectetur adipisicing elit. Incidunt, sint?
        </p>
    <button className='bg-[#5ad5d8]  hover:bg-[#8cdae4] mt-8 py-2 px-6 shadow-xl rounded-3xl'>Get Started</button>
    </section>
  )
}

export default Landing
