import { Fragment } from "react"
import TopImpageProduct from "../../Componants/product-page/top-image/top-image.componant"
import HomePageButton from "../../Componants/product-page/home-page-button/home-page-button.componant"
import ProductDisplay from "../../Componants/product-page/product-display/product.display.componant"
import FactoryDetails from "../../Componants/product-page/factory-details/factory.details.componant"
import ProductDescription from "../../Componants/product-page/product-description/prodcuct.description.componant"


import {topImgDetails, productBrandDetails, productImages, productDescription} from "./jeans.data.js"


const Jeans = ()=> {
    return (
    <Fragment>
    <TopImpageProduct imageUrl={topImgDetails[0].topImageUrl}>
        {topImgDetails[0].topImageText}
    </TopImpageProduct>
    <HomePageButton />
    <ProductDisplay 
        logoImgUrl={productBrandDetails[0].logoImgUrl} 
        brandText={productBrandDetails[0].brandText}
        productImages={productImages}
    />
    <ProductDescription tableData={productDescription}/>
    <FactoryDetails />
    </Fragment>
    )

}

export default Jeans