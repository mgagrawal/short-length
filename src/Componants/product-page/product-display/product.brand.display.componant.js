import React from 'react';
import "./product.display.scss"


function ProductBrandDisplay({logoImgUrl, brandText}) {
    return (
            <div className='product-brand-details-container'>
                <div>
                    <img className="certified-image" alt="certified" src="http://badifactory.com/wp-content/uploads/2022/04/verify-logo.png"/>
                </div>
                <div>
                    <div>
                    
                    <img className="brand-image" alt="brand" src={logoImgUrl}/>
                    </div>
                    <h3 className='product-discription-heading'>{brandText}</h3> 
                </div>
                <div className='right-arrow-product'><i className="fas fa-long-arrow-alt-right"></i></div>
                <div>
                    <img className='whatsapp-link-image1' alt="whatsapp" src="http://badifactory.com/wp-content/uploads/2022/05/whatsapp-button-new-12.png"/> 
                </div>
            </div>
    );
}

export default ProductBrandDisplay;