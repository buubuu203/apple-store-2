import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    hero_iphone_15__2x,
    hero_iphone_15_pro__2x,
    iphone_se_hero__2x,
} from '../assets/img';

const IphonePromotion = () => {
    
    const navigate = useNavigate();
    return (
        <div>
            {/* Bread Crumb */}
            <div className="text-sm breadcrumbs text-gray font-SFPro ml-6 p-2">
                <ul>
                    <li><Link>Home</Link></li>
                    <li>Iphone</li>
                </ul>
            </div>
            {/* Hero section */}
            {/* iPhone 15 Pro*/}
            <div className='w-full font-SFPro text-center animate-fade-up animate-once animate-duration-[1000ms] animate-ease-linear animate-normal bg-black pt-2'>
                <p className='text-base mt-4 font-thin text-orange'>
                    Mới
                </p>
                <div className='text-5xl my-2 font-medium text-white'>iPhone 15 Pro</div>
                <div className='text-2xl font-medium text-white'>
                    Titan
                </div>
                <p className='text-xl text-white font-normal my-3'>Từ 28.999.000đ</p>
                <div className="flex justify-center align-middle gap-5">
                    <button className='bg-blue text-white text-base py-1 px-3 my-4 rounded-2xl hover:text-blue hover:bg-gray' onClick={() => navigate("/Iphone/012")}>
                        Mua
                    </button>
                    <Link className='text-blue text-base py-1 px-3 my-4 hover:opacity-50' to='/Iphone/012'>
                        Tìm hiểu thêm<ChevronRightIcon className='text-base' />
                    </Link>
                </div>
                <div class="w-full flex align-middle justify-center"><img src={hero_iphone_15_pro__2x} alt='hero_iphone_15_pro__2x' className='w-full' /></div>
            </div>

            {/* iPhone 15 */}
            <div className='w-full font-SFPro text-center animate-fade-up animate-once animate-duration-[1000ms] animate-ease-linear animate-normal'>
                <p className='text-base mt-4 font-thin text-orange'>
                    Mới
                </p>
                <div className='text-5xl my-2 font-medium text-black'>iPhone 15</div>
                <div className='text-2xl font-medium text-black'>
                    Mới lịm tim
                </div>
                <p className='text-xl text-black font-normal my-3'>Từ 22.999.000đ</p>
                <div class="flex justify-center align-middle gap-5">
                    <button className='bg-blue text-white text-base py-1 px-3 my-4 rounded-2xl hover:text-blue hover:bg-gray' onClick={() => navigate("/Iphone/013")}>
                        Mua
                    </button>
                    <Link className='text-blue text-base py-1 px-3 my-4 hover:opacity-50' to='/Iphone/013'>
                        Tìm hiểu thêm<ChevronRightIcon className='text-base' />
                    </Link>
                </div>
                <div class="w-full flex align-middle justify-center"><img src={hero_iphone_15__2x} alt='hero_iphone_15__2x' className='w-full' /></div>
            </div>
            {/* iPhone SE */}
            <div className='w-full font-SFPro animate-fade-up animate-once animate-duration-[1000ms] animate-ease-linear animate-normal flex justify-around text-center px-4'>
                <div class="w-1/3"><img src={iphone_se_hero__2x} alt=' iphone_se_hero__2x' className='' /></div>
                <div class="mx-2 self-center">
                    <p className='text-base mt-4 font-thin text-orange'>
                        Mới
                    </p>
                    <div className='text-5xl my-2 font-medium text-black'>iPhone SE </div>
                    <div className='text-2xl font-medium text-black'>
                        Yêu sức mạnh.
                        Yêu luôn giá trị.
                    </div>
                    <p className='text-xl text-black font-normal my-3'>Từ 11.999.000đ</p>
                    <div class="flex justify-center align-middle gap-5">
                        <button className='bg-blue text-white text-base py-1 px-3 my-4 rounded-2xl hover:text-blue hover:bg-gray'>
                            Mua
                        </button>
                        <Link className='text-blue text-base py-1 px-3 my-4 hover:opacity-50' href='#'>
                            Tìm hiểu thêm<ChevronRightIcon className='text-base' />
                        </Link>
                    </div>
                </div>
            </div>


            <section id='products' className='max-container max-sm:mt-12 font-SFPro p-2 text-center my-3'>
                <div className='flex flex-col justify-start gap-5 mt-2 pt-5 border-t-neutral-200'>
                    <h2 className='text-5xl font-medium '>
                        iPhone
                    </h2>
                    <p className=' mt-2 text-center text-slate-gray'>
                        Trải nghiệm chất lượng và phong cách hàng đầu với các lựa chọn được săn lùng của chúng tôi. Khám phá thế giới tiện nghi, thiết kế và giá trị
                    </p>
                </div>
            </section>
            
        </div>
    )
}

export default IphonePromotion