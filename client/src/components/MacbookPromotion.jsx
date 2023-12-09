import React from 'react'
import { Link } from 'react-router-dom';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Footer from '../components/Footer'
import { mac_studio__2x, mac_pro__2x, macbook_air__2x } from '../assets/img/index'
import { Macbook } from '../constants';
import { useNavigate } from "react-router-dom"

const MacbookPromotion = () => {
    const navigate = useNavigate()

  return (<>
  <div className="text-sm breadcrumbs text-gray font-SFPro ml-6 p-2">
            <ul>
                <li><Link>Home</Link></li>
                <li>Macbook</li>
            </ul>
        </div>

        <div className='w-full font-SFPro text-center animate-fade-up animate-once animate-duration-[1000ms] animate-ease-linear animate-normal'>
            <p className='text-base mt-4 font-thin text-orange'>
                Mới
            </p>
            <div className='text-5xl my-2 font-medium text-black'>MacBook Air 15”</div>
            <div className='text-2xl font-medium text-black'>
                Lớn ấn tượng. Mỏng không tưởng.
            </div>
            <p className='text-xl text-black font-normal my-3'>Từ 32.999.000đ</p>
            <div class="flex justify-center align-middle gap-5">
                <button className='bg-blue text-white text-base py-1 px-3 my-4 rounded-2xl hover:text-blue hover:bg-gray' onClick={() => navigate("/Macbook/007")}>
                    Mua
                </button>
                <Link to='/Macbook/007' className='text-blue text-base py-1 px-3 my-4 hover:opacity-50' href='#'>
                    Tìm hiểu thêm<ChevronRightIcon className='text-base' />
                </Link>
            </div>
            <div class="w-full flex align-middle justify-center"><img src={macbook_air__2x} alt='macbook_air__2x' className='w-2/3' /></div>
        </div>
{/* Mac Studio */}
        <div className='w-full font-SFPro text-center animate-fade-up animate-once animate-duration-[2500ms] animate-ease-linear animate-normal mt-6'>
            <p className='text-base mt-4 font-thin text-orange'>
                Mới
            </p>
            <div className='text-5xl my-2 font-medium text-black'>Mac Studio</div>
            <div className='text-2xl font-medium text-black'>
                Siêu mạnh mẽ với M2 Max và M2 Ultra.
            </div>
            <p className='text-xl text-black font-normal my-3'>Từ 54.999.000đ</p>
            <div className="flex justify-center align-middle gap-5">
                <button className='bg-blue text-white text-base py-1 px-3 my-4 rounded-2xl hover:text-blue hover:bg-gray' onClick={() => navigate("/Macbook/008")}>
                    Mua
                </button>
                <Link to='/Macbook/008' className='text-blue text-base py-1 px-3 my-4 hover:opacity-50' href='#'>
                    Tìm hiểu thêm<ChevronRightIcon className='text-base' />
                </Link>
            </div>
            <div className="w-full flex align-middle justify-center"><img src={mac_studio__2x} alt='mac_studio__2x' className='w-1/3' /></div>
        </div>
{/* Mac Pro 2x */}
        <div className='w-full font-SFPro text-center animate-fade-up animate-once animate-duration-[4000ms] animate-ease-linear animate-normal mt-6'>
            <p className='text-base mt-4 font-thin text-orange'>
                Mới
            </p>
            <div className='text-5xl my-2 font-medium text-black'>Mac Pro</div>
            <div className='text-2xl font-medium text-black'>
                Biến đổi toàn diện với Apple silicon.
            </div>
            <p className='text-xl text-black font-normal my-3'>Từ 179.999.000đ</p>
            <div className="flex justify-center align-middle gap-5">
                <button className='bg-blue text-white text-base py-1 px-3 my-4 rounded-2xl hover:text-blue hover:bg-gray' onClick={() => navigate("/Macbook/010")}>
                    Mua
                </button>
                <Link to='/Macbook/010' className='text-blue text-base py-1 px-3 my-4 hover:opacity-50' href='#'>
                    Tìm hiểu thêm<ChevronRightIcon className='text-base' />
                </Link>
            </div>
            <div class="w-full flex align-middle justify-center"><img src={mac_pro__2x} alt='mac_pro__2x' className='w-1/3' /></div>
        </div>

        <section id='products' className='max-container max-sm:mt-12 font-SFPro p-2 text-center my-3'>
            <div className='flex flex-col justify-start gap-5 mt-2 pt-5 border-t-neutral-200'>
                <h2 className='text-5xl font-medium '>
                    Macbook - iMac
                </h2>
                <p className=' mt-2 text-center text-slate-gray'>
                    Trải nghiệm chất lượng và phong cách hàng đầu với các lựa chọn được săn lùng của chúng tôi. Khám phá thế giới tiện nghi, thiết kế và giá trị
                </p>
            </div>

        </section>
  </>
)
}

export default MacbookPromotion