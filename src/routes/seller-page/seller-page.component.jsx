import { Link } from 'react-router-dom';
import goBack from '../../assets/chevron-left-solid.svg'
import ProductCard from '../../component/product-card/product-card.component';

import './seller-page.styles.css'

const SellerPage = () => {
    return (
        <div className='w-100 h-100'>
            <Link to='/'>
                <img src={goBack} alt="back icon" style={{width: '20px'}} className="mt-2 ml-2" />
            </Link>
            {/* Seller and address */}
            <div className='ml-2'>
                <h1 className='mb-1 mt-1' >Mahalakshmi Oxygen Seller</h1>
                <p className='mt-1 mb-1 secondary-text' >Kathgodam,Haldwani</p>
                <p className='mt-1 mb-1 secondary-text' >5 hours | 20 Km</p>
            </div>
            {/* order online or through whatsapp */}
            <div className="ml-2 mr-2 mt-3 d-flex jc-space-btw" >
                <div className="online-button">Online</div>
                <div className="whatsapp-button">Whatsapp</div>
            </div>
            {/* Products List */}
            <h2 className="secondary-text ml-2">Cylinders</h2>
            <hr className="secondary-bg w-90 m-auto" />
            <ProductCard size='Large' weight='50 kg'/>
            <ProductCard  size='Medium' weight='30 kg' />
            <hr className="secondary-bg w-90 m-auto" />
            {/* Total item selected */}
            <div className='mini-cart-container d-flex jc-space-btw al-item-cen'>
                <p className='total-items f-size-0' >3 ITEMS</p>
                <div className='view-cart'>
                    <span>View Cart</span>
                    <img />
                </div>
            </div>
        </div>
    )
}

export default SellerPage;