import React from 'react';
import "./factory.details.scss"

function FactoryDetails({factoryImages}) {
    return (
        <div className='factory-details-container'>
            <div className='company-details-button'>
                Company Details
            </div>

            <div className='our-factoy-button'>
                Our Factory
            </div>

            <div className='factory-image-carousel-container'>
                image carousel container
            </div>
        </div>
    );
}

export default FactoryDetails;