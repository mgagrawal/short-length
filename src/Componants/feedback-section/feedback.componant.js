import React from 'react';
import "./feedback.scss"
import FeedbackCarousel from './feedback-carousel/feedback-carousel';

function Feedback() {
    return (
        <div className='feedback-container'>
            <div className='main-feedback'>
                <h6>Retailers Feedback</h6>
                <h1>Top Reviews</h1>
                <p>I am very satisfied with badifactory.com website, Docket is a very experienced supplier of Men jeans.Customer service was quite professional, and they patiently explained everything I needed to know about the product I purchased.</p>
                <p>We communicated with suppliers both online and offline and received timely response as needed. Overall, we are pleased with our order. I’m hoping they’ll be able to receive more orders. </p>
            </div>

        <div className='feedback-coursel'>
            <FeedbackCarousel/>
        </div>
        </div>
    );
}

export default Feedback;