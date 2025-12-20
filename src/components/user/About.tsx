import React from 'react'

const About = () => {
  return (
    <section className='py-12'>
        <div className='container'>
            <div className="flex flex-wrap items-center">
                <div className="md:w-1/2 pr-4">
                    <h2 className='text-3xl font-bold mb-4'>About Us</h2>
                    <p className='mb-4'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.</p>
                </div>
                <div className="md:w-1/2">
                    <img src="/images/about.png" alt="About Us" className='w-full h-auto rounded'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About