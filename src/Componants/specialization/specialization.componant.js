import specializationData from './specialization.data';
import './specialization.section.scss'

function specialization () {
    return (
            <div className="specialization-section-container">
                {specializationData.map((Img, ImgIndex) => {
                    return (<div key={ImgIndex}> 
                    <div className="specialization-image" style={{backgroundImage: `url(${Img.url})`}}></div>
                        <h5 className="specialization-text">{Img.text}</h5>
                    </div>
                    )
                })}
            </div>
    );
}

export default specialization ;