import ImageSlider from "./carousel.componant"
import slides from "./slider.image.url"

import "./carousel.scss"

const Carousel = ()=> {
return (
        <div className="image-slider-container">
            <ImageSlider slides={slides} parantWidth={100}/>
        </div>
    )
}

export default Carousel