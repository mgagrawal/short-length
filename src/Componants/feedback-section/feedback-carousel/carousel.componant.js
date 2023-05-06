import { useCallback, useEffect, useRef, useState } from "react"
import "./feedback-carousel.scss"


const ImageSlider = ({slides, parantWidth})=> {
    const timeRef = useRef(null)
    const [currentIndex, setCurrentIndex] = useState(0)
    
    const getActiveSlideBackgroundImage = (slideIndex) => {
        return (
        {
            // backgroundColor: 'blue',
            width: `${parantWidth}%`,
            opacity: '1',
            // animation: 'fade-in-animation 0.8s forwards',
            overflow: 'hidden'
        }
    )}


    const getSlideBackgroundImage = (slideIndex) => {
        return (
        {
            backgroundImage: `url(${slides[slideIndex].url})`,
            width: `${parantWidth}%`,
            opacity: '0',
            overflow: 'hidden'
        }
    )}


    const getSliderStyle = ()=>  {
        return ( 
        {
            display: 'flex',
            height: '100%',
            overflow: 'hidden',
            width: `${parantWidth * slides.length}%`,
            opacity: '1',
            transform: `translateX(${-(currentIndex * parantWidth)/slides.length}%)`,
            transition: 'transform 1s ease',
            
            

        } 
    )}

    const goToNextSlide = useCallback(()=>{
        if (currentIndex === slides.length-1){
            setCurrentIndex(0)
        } else {
            const nextSlide = currentIndex + 1
            setCurrentIndex(nextSlide)
        }
    },[currentIndex, slides])
    const goToSlide = (slideIndex)=> {
        setCurrentIndex(slideIndex)
    }

    useEffect(()=> {
        if (timeRef.current) {
            clearTimeout(timeRef.current)
        };
         timeRef.current = setTimeout(() => {
            goToNextSlide()
         }, 3000);
         return ()=> {clearTimeout(timeRef.current)}

         },[goToNextSlide])

    return (
        <div className="feedback-image-slider">
            <div className="feedback-dots-container">
                {slides.map(
                    (slide, slideIndex) => {
                        return (<div key={slideIndex} className={slideIndex === currentIndex ? "feedback-aciveDot" : "feedback-dots"} onClick={()=> goToSlide(slideIndex)}>●</div>)
                }
                )
                }
            </div>
             <div style={getSliderStyle()}>
                {slides.map((slides, slideIndex) => {
                    return (
                        <div key={slideIndex} className="feedback-image-slide" style={slideIndex === currentIndex ? getActiveSlideBackgroundImage(slideIndex) : getSlideBackgroundImage(slideIndex)}>
                            <img className="customer-image" alt='customer' src={slides.url}/>
                            <p>{slides.feedback}</p>
                            <h4>{slides.name}</h4>
                            <h6>Happy Retailer</h6>
                        </div>
                    )
                })}
             </div>  
        </div>
    )
}

export default ImageSlider;