import React from 'react'

import { useNavigate } from 'react-router-dom';
import { HomePage_Hero } from '../constants';
import { promo_m2_chip } from '../assets/img';
const Hero = () => {
    const navigate = useNavigate();
    // FIXME: khi click vao anh -> navigate to san pham
    const handleLabelClick = () => {
        // Điều hướng đến component SignIn khi label được nhấp
        navigate('/SignIn');
    }

    return (
        <div className='bg-[#fbfbfd]'>
            <div className="h-52 sm:h-96 carousel carousel-vertical font-SFPro " onClick={handleLabelClick}>
                <div className="carousel-item h-full " >
                    <span className='text-center font-medium text-2xl sm:text-3xl py-2 mt-2 absolute text-gray w-full'>{HomePage_Hero[0].title}
                        <div className='text-center font-extralight py-2 text-sm sm:text-xl absolute text-gray w-full'>
                            {HomePage_Hero[0].description}
                        </div>

                    </span>

                    <img src={HomePage_Hero[0].imgURL} alt='' />
                </div>
                <div className="carousel-item h-full">
                    <img src={HomePage_Hero[1].imgURL} alt='' />

                </div>

            </div>
            <div className="carousel-item sm:h-96 -my-2 h-52 font-SFPro  animate-fade-up animate-once animate-duration-1000 animate-ease-in">
                <img src={HomePage_Hero[2].imgURL} alt='' />
                <span className='text-center font-medium text-2xl sm:text-3xl py-2 mt-2 absolute text-white w-full '>
                    <img src={HomePage_Hero[2].logoURL} className='sm:w-32 w-20  absolute left-[40%] lg:left-[45%]' alt=''></img>
                    <div className='text-center font-extralight py-2 text-sm sm:text-xl absolute text-white w-full sm:mt-12 mt-8'>
                        {HomePage_Hero[2].description}
                    </div>

                </span>
            </div>

            <div className='lg:flex mt-4 h-full font-SFPro '>
                <div className=" m-2 ">
                    <img src={HomePage_Hero[3].logoURL} alt='' className='absolute lg:w-1/12 lg:left-[21%] w-[100px] left-[38%] md:left-[43%]' />

                    <div className='text-center font-extralight py-2 text-xs sm:text-xl  text-black w-full lg:w-1/2 absolute sm:mt-14 mt-8'>
                        {HomePage_Hero[3].description}
                    </div>

                    <img src={HomePage_Hero[3].imgURL} alt='' />

                </div>

                <div className="m-2">
                    <img src={HomePage_Hero[4].logoURL} alt='' className='absolute lg:w-1/12 lg:left-[70%] w-[140px] left-[32%] md:left-[40%]' />
                    <div className='text-center font-extralight py-2 text-xs sm:text-xl w-full text-black lg:w-1/2 absolute sm:mt-12 mt-6'>
                        {HomePage_Hero[4].description}
                    </div>
                    <img src={HomePage_Hero[4].imgURL} alt='' />

                </div>

            </div>

            <div className='lg:flex mt-4 h-full font-SFPro '>
                <div className=" m-2 ">
                    <img src={HomePage_Hero[5].logoURL} alt='' className='absolute lg:w-1/12 lg:left-[21%] w-[100px] left-[38%] md:left-[43%]' />

                    <div className='text-center font-extralight py-2 text-xs sm:text-xl  text-black w-full lg:w-1/2 absolute sm:mt-14 mt-8'>
                        {HomePage_Hero[5].description}
                    </div>

                    <img src={HomePage_Hero[5].imgURL} alt='' />

                </div>

                <div className="m-2">
                    <h4 className='text-center text-2xl font-semibold ' >
                        {HomePage_Hero[6].title}
                    </h4>
                    <div className='text-center font-extralight py-2 text-xs sm:text-xl w-full text-black lg:w-1/2 absolute '>
                        {HomePage_Hero[6].description}
                    </div>
                    <img src={HomePage_Hero[6].imgURL} alt='' />
                </div>
            </div>

            <div className='lg:flex mt-4 h-full font-SFPro gap-1'>
                <div className="">
                    <div class="absolute lg:w-1/2 w-full">
                        <div className='font-extralight py-4 text-sm sm:text-xl flex text-white  text-center justify-center sm:w-full lg:leading-[56px]'>
                            {HomePage_Hero[7].description}
                            <img src={promo_m2_chip} className='px-2 w-14 lg:w-20' alt='' />
                        </div>

                    </div>
                    <img src={HomePage_Hero[7].imgURL} alt='' />

                </div>

                <div className="">
                    <div className='text-center sm:text-2xl font-medium absolute z-[2] text-white pt-3 lg:w-1/2 w-full text-base' >
                        {HomePage_Hero[8].title}
                        <div className=' text-center sm:text-base font-light pt-2 text-sm'>
                            {HomePage_Hero[8].description}
                        </div>
                    </div>

                    <img src={HomePage_Hero[8].imgURL} alt='' />

                </div>

            </div>

        </div>
    )
}

export default Hero