import { Star } from "@mui/icons-material";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
    return (
        <div className='flex justify-center items-center flex-col font-SFPro'>
            <img
                src={imgURL}
                alt='customer'
                className='rounded-full object-cover w-[120px] h-[120px]'
            />
            <p className='mt-6 text-gray-dark max-w-sm text-center info-text'>{feedback}</p>
            <div className='mt-3 flex justify-center items-center gap-2.5'>
                <Star className="text-yellow" />
                <p className='text-base text-slate-gray'>({rating})</p>
            </div>
            <h3 className='mt-1 text-2xl text-gray-dark text-center font-bold'>
                {customerName}
            </h3>
        </div>
    );
};

export default ReviewCard;