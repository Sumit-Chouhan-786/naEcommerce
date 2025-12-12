import CommonButton from '@/components/common/commonButton'
import CommonHero from '@/components/common/CommonHero'

const page = () => {
  return (
    <>
    <CommonHero pageName='404 Error'/>
    <div className='container'>
        <div className='py-10 flex flex-col items-center'>
            <h1 className='md:text-4xl text-3xl lg:text-6xl font-bold text-center mb-5 lg:mb-10'>404 - Page Not Found</h1>
            <CommonButton text='Go to Home'/>
        </div>

    </div>
    </>
  )
}

export default page