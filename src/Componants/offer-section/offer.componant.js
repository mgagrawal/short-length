import offerData from "./offer.data";
import './offer.section.scss'

function Offer (props) {
    return (
        <div className="offer-section-container">
            <div className="offer-section-header">
                <h2 className="offfer-section-header">OFFERS</h2>
            </div>
            <div className="offer-card-container">
                {offerData.map((offerImg, offerImgIndex) => {
                    return (<div key={offerImgIndex} className="offer-image" style={{backgroundImage: `url(${offerImg.url})`}}></div>)
                })}
            </div>
        </div>
    );
}

export default Offer ;