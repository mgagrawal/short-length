import CounterUpCard from "./counterup.componant";
import counterUpData from "./counterup.data";
import "./counterup.scss"

import React from 'react';

function CoutnerUp() {
    return (
        <div className="couterup-container">
            {counterUpData.map((counterup)=> {
                return (<div key={counterup.id}>
                    <div className="counterup-number">
                        <CounterUpCard start={counterup.start} end={counterup.end} incremental={counterup.increment}/>
                    </div>
                    <p className="counterup-description">{counterup.text}</p>
                </div>)
            }
            )
            }
        </div>
    );
}

export default CoutnerUp;