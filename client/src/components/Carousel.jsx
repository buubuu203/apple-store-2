import React from 'react';

import { Airpods_Carousel } from '../constants';




const Carousel = () => {




    return (
        <>
            <div className="sm:px-8 p-3 z-10 w-full font-SFPro bg-black text-white fixed">
                <div className="flex justify-between items-center max-container">
                    <ul className="flex-1 lg:flex justify-center items-center gap-16  hidden ">
                        {Airpods_Carousel.map((item) => (
                            <li key={item.title} >
                                <a
                                    href={item.href}
                                    className=" cursor-pointer text-white hover:text-gray"
                                >
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div >

        </>
    )

}



export default Carousel;
