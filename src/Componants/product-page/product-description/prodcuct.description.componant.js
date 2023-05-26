import React from 'react';
import "./product.description.scss"


function ProductDescription({tableData, certificateImages}) {
    return (
        <div className='product-description-container'>
            <div className='product-description-table'>
                <h3>Product Details</h3>
                <table>
                <thead>
                    <tr>
                        <th>Details</th>
                        <th>Specification</th>
                    </tr>
                </thead>
                <tbody>

                {tableData.map((dsec, dsecIndex) => {
                    return (
                        <tr key={dsecIndex}>
                        <td>{dsec.heading}</td>
                        <td>{dsec.value}</td>
                        </tr>
                    )
                })}
                </tbody>
                </table>

            </div>
            <div className='product-description-carousel-container'>
                <h3>Certificates</h3>
            </div>
        </div>
    );
}

export default ProductDescription;