import ImageSlider from "./carousel.componant"
import slides from "./slider.image.url"

import "./feedback-carousel.scss"

const FeedbackCarousel = ()=> {
return (
        <div className="feedback-image-slider-container">
            <ImageSlider slides={slides} parantWidth={100}/>
        </div>
    )
}

export default FeedbackCarousel;