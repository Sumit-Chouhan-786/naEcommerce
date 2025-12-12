import Link from 'next/link'

interface CommonHeroProps {
  pageName: string
}

const CommonHero = ({ pageName }: CommonHeroProps) => {
  return (
    <div className='sm:py-14 py-8'>
        <div className='container'>
          <Link href='/' className='text-sm text-gray-500 hover:underline'>
            Home
          </Link>
          <span className='text-sm text-gray-500 mx-2'>/</span>
          <span className='text-sm font-medium'>{pageName}</span>
        </div>
    </div>
  )
}

export default CommonHero
