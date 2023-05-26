import React, { useEffect, useState } from 'react';

function CounterUpCard ({start, end, incremental}) {

    const [number, setNumber] = useState(start)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
          const scrollPosition = window.scrollY + window.innerHeight;
          const elementPosition = document.getElementById('counter').offsetTop;
          if (scrollPosition >= elementPosition) {
            setIsVisible(true);
          }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);



    useEffect(()=> {
        if(isVisible){
        const increment = Math.ceil(2000/end)
        const timer = setInterval(()=> {
            setNumber((prevNumber)=> {
                if(prevNumber<end) {
                    return prevNumber + incremental
                }
                return end
            })
        },increment)

        return ()=> clearInterval(timer)
    }
    } ,[isVisible, end, incremental])

    return (
        <div>
            <div id='counter'>{number}<span>+</span></div>
        </div>
    );
}

export default CounterUpCard