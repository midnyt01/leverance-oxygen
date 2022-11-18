import './product-card.styles.css'


const ProductCard = ({size, weight}) => {
    return (
        <div className="w-90 m-auto d-flex jc-space-btw cylinder-container" >
            {/* Cylinder Info container */}
            <div className="d-flex fd-col jc-center">
                <h3 className="mb-1 secondary-text">{`${size} Cylinder`}</h3>
                <span className="f-size-0 " >Quantity : 1</span>
                <span className="f-size-0" >Pressure : 2000 psi</span>
                <span className="f-size-0" >{`Weight : ${weight}`}</span>
            </div>
            {/* Cylinder image container */}
            <div className="d-flex fd-col jc-center">
                <img className="cylinder-image-box" />
                <div className="quantity-toggle">
                    <div className='quantity-elements'>-</div>
                    <div className='quantity-elements'>2</div>
                    <div className='quantity-elements'>+</div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard