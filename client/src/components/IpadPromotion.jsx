import React from 'react'
import { Link } from 'react-router-dom';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Footer from '../components/Footer';
import { useNavigate } from "react-router-dom";
import {
    ipad_hero_2x,
    ipad_pro_hero_large,
    promo_m2_chip
} from '../assets/img';


const IpadPromotion = () => {
    const navigate = useNavigate()

  return (<div>
    {/* Bread Crumb */}
    <div className="text-sm breadcrumbs text-gray font-SFPro ml-6 p-2">
        <ul>
            <li><Link>Home</Link></li>
            <li>Ipad</li>
        </ul>
    </div>
    {/* Hero section */}
    {/* iPad */}
    <div className='w-full font-SFPro animate-fade-up animate-once animate-duration-[1000ms] animate-ease-linear animate-normal flex justify-around text-center px-4'>
        <div className="w-2/3"><img src={ipad_hero_2x} alt='ipad_hero_2x' className='' /></div>
        <div className="mx-2 self-center">
            <p className='text-base mt-4 font-thin text-orange'>
                Mới
            </p>
            <div className='text-5xl my-2 font-medium text-black'>iPad </div>
            <div className='text-2xl font-medium text-black'>
                Thấy là yêu.
                Vẽ là phiêu.
                Tuyệt diệu.
            </div>
            {/* <p className='text-xl text-black font-normal my-3'>Từ 32.999.000đ</p> */}
            <div className="flex justify-center align-middle gap-5">
                <button className='bg-blue text-white text-base py-1 px-3 my-4 rounded-2xl hover:text-blue hover:bg-gray' onClick={() => navigate("/Ipad/001")}>
                    Mua
                </button >
                <Link className='text-blue text-base py-1 px-3 my-4 hover:opacity-50' to='/Ipad/001'>
                    Tìm hiểu thêm<ChevronRightIcon className='text-base' />
                </Link>
            </div>
        </div>
    </div>
    <div className='w-full font-SFPro text-center animate-fade-up animate-once animate-duration-[2500ms] animate-ease-linear animate-normal mt-6 pt-7 bg-[#020005]'>
        <p className='text-base mt-4 font-thin text-orange'>
            Mới
        </p>
        <div className='text-5xl my-2 font-medium text-white'>iPad Pro</div>
        <div class="text-2xl font-medium text-white flex justify-center items-center">
            <p className=''>
                Siêu mạnh mẽ với M2
            </p>
            <img src={promo_m2_chip} alt='m2' />
        </div>
        <p className='text-xl text-white font-normal my-3'>Từ 23.290.000 đ</p>
        <div className="flex justify-center align-middle gap-5">
            <button className='bg-blue text-white text-base py-1 px-3 rounded-2xl hover:text-blue hover:bg-gray' onClick={() => navigate("/Ipad/018")}>
                Mua
            </button>
            <Link className='text-blue text-base py-1 px-3 hover:opacity-50' to='/Ipad/018'>
                Tìm hiểu thêm<ChevronRightIcon className='text-base' />
            </Link>
        </div>
        <div class="w-full flex align-middle justify-center"><img src={ipad_pro_hero_large} alt=' ipad_pro_hero_large' className='w-full' /></div>
    </div>

    <section id='products' className='max-container max-sm:mt-12 font-SFPro p-2 text-center my-3'>
        <div className='flex flex-col justify-start gap-5 mt-2 pt-5 border-t-neutral-200'>
            <h2 className='text-5xl font-medium '>
                iPad
            </h2>
            <p className=' mt-2 text-center text-slate-gray'>
                Trải nghiệm chất lượng và phong cách hàng đầu với các lựa chọn được săn lùng của chúng tôi. Khám phá thế giới tiện nghi, thiết kế và giá trị
            </p>
        </div>
    </section>

</div>)
}

export default IpadPromotion