import React from 'react';

import ProductBrandDisplay from './product.brand.display.componant';
import ProductDisplayDetails from './product.display.details.componant';
import "./product.display.scss"


function ProductDisplay({logoImgUrl, brandText, productImages}) {
    return (
        <div>
            <ProductBrandDisplay logoImgUrl={logoImgUrl} brandText={brandText}/>
            <ProductDisplayDetails productImages={productImages}/>
        </div>
    );
}

export default ProductDisplay;