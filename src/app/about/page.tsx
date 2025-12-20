import CommonHero from '@/components/common/CommonHero'
import About from '@/components/user/About'
import AboutSales from '@/components/user/AboutSales'
import Team from '@/components/user/Team'

const page = () => {
  return (
    <>
    <CommonHero pageName='About'/>
    <About/>
    <AboutSales/>
    <Team/>
    </>
  )
}

export default page