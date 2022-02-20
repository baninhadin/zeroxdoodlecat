import Link from 'next/link'
import Image from 'next/image'
import Card from '@/components/Card'
const IndexPage = () => (
  <>
    <div
      className='fixed h-screen w-screen overflow-hidden'
      style={{ zIndex: -1 }}
    >
      <div className='hidden sm:flex'>
        <Image
          alt='Background'
          src='/images/Background.png'
          layout='fill'
          objectFit='cover'
          quality={100}
        />
      </div>
      <div className='flex sm:hidden'>
        <Image
          alt='Background Mobile'
          src='/images/BackgroundMobile.png'
          layout='fill'
          objectFit='cover'
          quality={100}
        />
      </div>
    </div>
    <div className='h-full w-full'>
      <div className='flex justify-center items-center content-center max-w-screen-lg min-h-screen m-auto pt-40 md:pt-20 p-5'>
        <Card />
      </div>
    </div>
  </>
)

export default IndexPage
