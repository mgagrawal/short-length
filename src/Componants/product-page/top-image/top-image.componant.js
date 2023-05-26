import "./top-image.scss"

function TopImpageProduct({imageUrl, children}) {
    return (
        <div className='top-image-prodcut' style={{backgroundImage:`url(${imageUrl})`}}>
            <h1 className="top-image-text">{children}</h1>
        </div>
    );
}

export default TopImpageProduct;