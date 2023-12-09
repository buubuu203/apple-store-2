import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    tile__large_2x,
    tile_large_2x,
    tile_watch_se_large_2x,
} from '../assets/img';

const WatchPromotion = () => {
    
    const navigate = useNavigate();
    return (
        <div>
            {/* Bread Crumb */}
            <div className="text-sm breadcrumbs text-gray font-SFPro ml-6 p-2">
                <ul>
                    <li><Link>Home</Link></li>
                    <li>Watch</li>
                </ul>
            </div>
            {/* Hero section */}
            {/* { Apple Watch Series 9} */}
            <div className='w-full font-SFPro text-center animate-fade-up animate-once animate-duration-[1000ms] animate-ease-linear animate-normal bg-black pt-2'>
                <p className='text-base mt-4 font-thin text-orange'>
                    Mới
                </p>
                <div className='text-5xl my-2 font-medium text-white'>Apple Watch Series 9</div>
                <div className='text-2xl font-medium text-white'>
                    Thông minh hơn. Sáng hơn. Quyền năng hơn.
                </div>
                <p className='text-xl text-white font-normal my-3'>Từ 10.499.000đ</p>
                <div class="flex justify-center align-middle gap-5">
                    <button className='bg-blue text-white text-base py-1 px-3 my-4 rounded-2xl hover:text-blue hover:bg-gray'
                        onClick={() => navigate("/product/53")}
                    >
                        Mua
                    </button>
                    <Link className='text-blue text-base py-1 px-3 my-4 hover:opacity-50' to="/product/53" >
                        Tìm hiểu thêm<ChevronRightIcon className='text-base' />
                    </Link>
                </div>
                <div class="w-full flex align-middle justify-center"><img src={tile__large_2x} alt='tile__large_2x' className='w-full' /></div>
            </div>

            {/* Apple Watch Ultra 2*/}
            <div className='w-full font-SFPro text-center animate-fade-up animate-once animate-duration-[1000ms] animate-ease-linear animate-normal bg-[#f5f5f7] py-2'>
                <p className='text-base mt-4 font-thin text-orange'>
                    Mới
                </p>
                <div className='text-5xl my-2 font-medium text-black'>Apple Watch Ultra 2</div>
                <div className='text-2xl font-medium text-black'>
                    Một đẳng cấp
                    phiêu lưu mới.
                </div>
                <p className='text-xl text-black font-normal my-3'>Từ 21.999.000đ</p>
                <div class="flex justify-center align-middle gap-5">
                    <button className='bg-blue text-white text-base py-1 px-3 my-4 rounded-2xl hover:text-blue hover:bg-gray'
                        onClick={() => navigate("/product/62")}>
                        Mua
                    </button>
                    <Link className='text-blue text-base py-1 px-3 my-4 hover:opacity-50' to="/product/62">
                        Tìm hiểu thêm<ChevronRightIcon className='text-base' />
                    </Link>
                </div>
                <div class="w-full flex align-middle justify-center"><img src={tile_large_2x} alt='tile_large_2x' className='w-full' /></div>
            </div>
            {/* iPhone SE */}
            <div className='w-full font-SFPro animate-fade-up animate-once animate-duration-[1000ms] animate-ease-linear animate-normal flex justify-around text-center px-4 bg-[#f5f5f7] py-2'>
                <div class="w-1/3"><img src={tile_watch_se_large_2x} alt=' tile_watch_se_large_2x' className='' /></div>
                <div class="mx-2 self-center ">
                    <p className='text-base mt-4 font-thin text-orange'>
                        Mới
                    </p>
                    <div className='text-5xl my-2 font-medium text-black'>Apple Watch SE </div>
                    <div className='text-2xl font-medium text-black'>
                        Một mối quá tuyệt.
                    </div>
                    <p className='text-xl text-black font-normal my-3'>Từ 6.399.000đ</p>
                    <div class="flex justify-center align-middle gap-5">
                        <button className='bg-blue text-white text-base py-1 px-3 my-4 rounded-2xl hover:text-blue hover:bg-gray'
                            onClick={() => navigate("/product/48")}
                        >
                            Mua
                        </button>
                        <Link className='text-blue text-base py-1 px-3 my-4 hover:opacity-50' to="/product/48" >
                            Tìm hiểu thêm<ChevronRightIcon className='text-base' />
                        </Link>
                    </div>
                </div>
            </div>

            <section id='products' className='max-container max-sm:mt-12 font-SFPro p-2 text-center my-3'>
                <div className='flex flex-col justify-start gap-5 mt-2 pt-5 border-t-neutral-200'>
                    <h2 className='text-5xl font-medium '>
                        Watch
                    </h2>
                    <p className=' mt-2 text-center text-slate-gray'>
                        Trải nghiệm chất lượng và phong cách hàng đầu với các lựa chọn được săn lùng của chúng tôi. Khám phá thế giới tiện nghi, thiết kế và giá trị
                    </p>
                </div>
            </section>

            {/* FIXME: TẠI SAO RENDER PRODUCT PAGE LỖI (AIRPODS VÀ WATCH) */}
            
        </div>
    )
}

export default WatchPromotion