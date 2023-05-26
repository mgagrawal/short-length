import { useEffect, useState } from "react";
import "./goToTop.scss"

function GoToTop() {

    const [isVisible, setIsVisible] = useState(false)

    useEffect(()=>{
        
        const handleScroll = ()=> {
            const scrollPosition = window.scrollY;
            const visibility = 100 
            console.log(scrollPosition)
            if (scrollPosition>visibility) {
                setIsVisible(true)
            }

            if(scrollPosition<=visibility){
                setIsVisible(false)
            }
        };
        window.addEventListener("scroll", handleScroll)

        return ()=> window.removeEventListener("scroll", handleScroll)
    }, [])



    const goToTop = ()=> {
        window.scrollTo(
            {top:0, left:0, behavior:"smooth"})
    }
    
    return (
        isVisible && 
        <div onClick={goToTop} className="gototop-button">
            <i className="fas fa-arrow-up"></i>
        </div>
    );
}

export default GoToTop;