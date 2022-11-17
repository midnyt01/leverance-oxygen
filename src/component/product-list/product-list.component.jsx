import './product-list.styles.css'

import cylinder from '../../assets/oxygen-cylinder.png'

const PorductList = () => {
    return (
        <div className='product-list-container'>
            <h2>GET YOUR OXYGEN NOW!</h2>
            <div className="product-container">
                <div className="product">
                    <img className='product-image' src={cylinder} alt='cylinder' />
                    <span className='product-name'>Large</span>
                </div>
                <div className="product">
                    <img className='product-image' src={cylinder} alt='cylinder' />
                    <span className='product-name'>Small</span>
                </div>
            </div>
        </div>
    )
}

export default PorductList;