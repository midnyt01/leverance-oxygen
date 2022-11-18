import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './order-card.styles.css'

const OrderCard = () => {
    return (
        <div className='order-cards-container'>
                <div className="order-card">
                    <div className="order-seller-info">
                        <div className='order-seller-image'>
                            <img />
                        </div>
                        <div className="order-seller-name-and-location">
                            <span className='order-seller-name'>Gupta Oxygen S...</span>
                            <span className="order-seller-location">Teenpaani, Haldwani</span>
                            <span className="order-seller-location">7 hours</span>
                        </div>
                        <span className='order-delivery-status'>Delivered</span>
                    </div>
                    <div className="order-quantity-container">
                        <div className='order-name'><span className='order-quantity'>2</span>x Large</div>
                        <div className='order-name'><span className='order-quantity'>2</span>x Medium</div>
                    </div>
                    <div className="order-other-info">
                        <div className='order-date'>06 Nov 2022</div>
                        <div className='reorder-button'>
                        <FontAwesomeIcon icon="fa-solid fa-arrow-rotate-left" size='xs'/>
                            <span className='pl-1'>Reorder</span>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default OrderCard;