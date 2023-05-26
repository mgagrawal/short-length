import React from 'react';

import "./product.display.scss"

function ProductDisplayDetails({productImages}) {
    return (
            <div className='product-display-details-container'>
                <div className='product-images-container'>  
                   { productImages.map((image,imageIndex)=> {
                        return (
                            <div className='product-image-container' key={imageIndex}>
                                <div className='product-image' style={{backgroundImage: `url(${image.productImageUrl})`}}/> 
                           </div>
                        )
                    })}
                </div>
                <div>
                    <img className='whatsapp-link-image' alt="whatsapp" src="http://badifactory.com/wp-content/uploads/2022/05/whatsapp-button-new-11.png"/> 
                </div>
            </div>
    );
}

export default ProductDisplayDetails;
