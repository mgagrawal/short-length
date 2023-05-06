import { useCallback, useEffect, useRef, useState } from "react"
import "./carousel.scss"


const ImageSlider = ({slides, parantWidth})=> {
    const timeRef = useRef(null)
    const [currentIndex, setCurrentIndex] = useState(0)
    
    const getActiveSlideBackgroundImage = (slideIndex) => {
        return (
        {
            backgroundImage: `url(${slides[slideIndex].url})`,
            width: `${parantWidth}%`,
            // flexShrink: '0',
            opacity: '1',
            animation: 'fade-in-animation 0.8s forwards'
        }
    )}


    const getSlideBackgroundImage = (slideIndex) => {
        return (
        {
            backgroundImage: `url(${slides[slideIndex].url})`,
            width: `${parantWidth}%`,
            // flexShrink: '0',
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
            transition: 'opacity 1s ease',
            
            

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

    const goToPreviousSlide = ()=> {
        if (currentIndex === 0){
            setCurrentIndex(slides.length-1)
        } else {
            const previousSlide = currentIndex - 1
            setCurrentIndex(previousSlide)
        }
    }

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
        <div className="image-slider">
            <div className="rightArrowStyle" onClick={goToNextSlide}> ❱</div>
            <div className="leftArrowStyle" onClick={goToPreviousSlide}>❰</div>
            <div className="dots-container">
                {slides.map(
                    (slide, slideIndex) => {
                        return (<div key={slideIndex} className={slideIndex === currentIndex ? "aciveDot" : "dots"} onClick={()=> goToSlide(slideIndex)}>●</div>)
                }
                )
                }
            </div>
            {/* <div style={{overflow:'hidden', height:'100%'}}> */}
             <div style={getSliderStyle()}>
                {slides.map((slides, slideIndex) => {
                    return (
                        <div key={slideIndex} className="image-slide" style={slideIndex === currentIndex ? getActiveSlideBackgroundImage(slideIndex) : getSlideBackgroundImage(slideIndex)}>
                        </div>
                    )
                })}
             </div>  
             {/* </div>  */}
        </div>
    )
}

export default ImageSlider;