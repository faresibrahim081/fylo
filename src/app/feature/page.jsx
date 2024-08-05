import iconAccess from '@/images/icon-access-anywhere.svg'
import iconFile from '@/images/icon-any-file.svg'
import iconCollaborattion from '@/images/icon-collaboration.svg'
import iconSecutity from '@/images/icon-security.svg'
import Image from 'next/image'

function Feature() {

  const feature = [
    {
      icon:iconAccess,
      title:'Access your file any whare',
      desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus harum sed enim optio quia, veniam assumenda.'
    },
    {
      icon:iconCollaborattion,
      title:'Real time collaboration',
      desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus harum sed enim optio quia, veniam assumenda.'
    },
    {
      icon:iconFile,
      title:'Store any type of file ',
      desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus harum sed enim optio quia, veniam assumenda.'
    },
    {
      icon:iconSecutity,
      title:'Security you can trust',
      desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus harum sed enim optio quia, veniam assumenda.'
    },
  ]

  return (
    <>
    <section className='mt-[200px] mb-[150px]'>
      <h1 className='text-[#5ad5d8] font-semibold text-center mb-[100px]'>Features</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-[100px] w-[850px] max-w-full mx-auto '>
        {feature.map((item,index) => {
          return(
            <div className='flex justify-center items-center flex-col' key={index}>
              <Image src={item.icon} width={110} height={110} alt={item.title} />
              <h3 className='my-4 text-xl'> {item.title} </h3>
              <p className='text-center'> {item.desc} </p>
            </div>
          )
        })}
      </div>
    </section>
    </>
  )
}

export default Feature
