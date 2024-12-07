import React from 'react'
import MoonLand from "../../assets/moon-surface-hd.png"
const Hero = () => {
  return (
    <div className='bg-black/20 h-full text-white relative z-50'>
      <div className='h-full flex justify-center items-center p-4'>
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className='space-y-4 lg:pr-36'>
            <h1 data-aos="fade-up" className='text-5xl font-bold uppercase'>Colorizing the Mother Earth</h1>
            <p data-aos="fade-up" data-aos-delay="300">
            "Our SAR Colorization project leverages cutting-edge Deep Learning techniques using Generative Adversarial Networks (GANs) to transform grayscale SAR images into vibrant, high-quality chromatic visuals. This innovative approach aims to enhance image interpretability for various applications, including environmental monitoring and disaster management."
            </p>
            <button
            data-aos="fade-up" data-aos-delay="500"
            className='primary-button'>Learn More.
            </button>
          </div>
          <div></div>
        </div>
      </div>
      {/* moon land image */}
      <img 
       src={MoonLand}
       alt="moon"
       className='absolute right-0 bottom-0 w-full brightness-50 z-10'
      />
      {/* Bottom Gradient Section */}
       <div className='absolute bottom-0 w-full z-30 bg-gradient-to-b from-transparent from-10% to-90% to-black h-[20px] sm:h-[50px] md:h-[60px]'>
       </div>
    </div>
  )
}

export default Hero
