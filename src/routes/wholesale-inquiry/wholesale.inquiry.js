import React, { Fragment } from 'react';

import TopImpageProduct from '../../Componants/product-page/top-image/top-image.componant';

import {topImgDetails} from "./wholesale.inquiry.data.js"
import InquiryForm from '../../Componants/inquiry-form/inquiry.from.componant';

function WholesaleInquiry(props) {
    return (
        <Fragment>
            <TopImpageProduct imageUrl={topImgDetails[0].topImageUrl}>
                {topImgDetails[0].topImageText}
            </TopImpageProduct>
            <InquiryForm />
        </Fragment>
    );
}

export default WholesaleInquiry;