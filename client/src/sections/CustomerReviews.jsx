import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";


const CustomerReviews = () => {
    return (
        <reveal className='max-container font-SFPro'>
            <p className='text-left mt-4 info-text'>
                Hãy nghe những câu chuyện chân thực từ những khách hàng hài lòng của chúng tôi về những trải nghiệm đặc biệt với chúng tôi.
            </p>

            <div className='mt-10 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
                {reviews.map((review, index) => (
                    <ReviewCard
                        key={index}
                        imgURL={review.imgURL}
                        customerName={review.customerName}
                        rating={review.rating}
                        feedback={review.feedback}
                    />
                ))}
            </div>
        </reveal>
    );
};

export default CustomerReviews;