import Image from 'next/image'
import Card from '@/components/Card'
import Footer from '@/components/Footer'
import Background from '@/public/images/Background.png'
import BackgroundMobile from '@/public/images/BackgroundMobile.png'
import BackgroundXL from '@/public/images/BackgroundXL.png'

const IndexPage = () => (
  <>
    <div
      className='fixed h-screen w-screen overflow-hidden'
      style={{ zIndex: -1 }}
    >
      <div className='hidden xl:flex'>
        <Image
          alt='Background XL'
          src={BackgroundXL}
          placeholder='blur'
          layout='fill'
          objectFit='cover'
          quality={100}
          priority
        />
      </div>
      <div className='hidden sm:flex xl:hidden'>
        <Image
          alt='Background'
          src={Background}
          placeholder='blur'
          layout='fill'
          objectFit='cover'
          quality={100}
          priority
        />
      </div>
      <div className='block sm:hidden'>
        <Image
          alt='Background Mobile'
          src={BackgroundMobile}
          placeholder='blur'
          layout='responsive'
          // objectFit='cover'
          quality={100}
          priority
        />
      </div>
    </div>
    <div className='min-h-screen'>
      <div className='flex justify-center items-center max-w-screen-lg m-auto pt-40 md:pt-30 px-5'>
        <Card />
      </div>
      <Footer />
    </div>
  </>
)

export default IndexPage
