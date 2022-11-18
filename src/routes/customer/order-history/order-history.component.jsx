import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import OrderCard from '../../../component/order-card/order-card.component';
import SearchBox from '../../../component/search-box/search-box.component';
import './order-history.styles.css'


const OrderHistory = () => {
    return (
        <div className='w-90 m-auto'>
            <div className='mt-2'>
                <Link to='/user-profile'>
                    <FontAwesomeIcon icon="fa-solid fa-arrow-left-long" size='xl'/>
                </Link>
                <span className='f-size-1 ml-2'>Order History</span>
            </div>
            <SearchBox />
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
        </div>
    )
}


export default OrderHistory;