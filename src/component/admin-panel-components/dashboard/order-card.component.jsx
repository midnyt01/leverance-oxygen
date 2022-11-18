import './seller-order-card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// tabs
function OrderTabs(evt, OrderCategory) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(OrderCategory).style.display = "block";
    evt.currentTarget.className += " active";
}

const OrderCard = () => {
  return (
    <div>
        <div class="tab">
            <button className='tablinks' onclick={OrderTabs('SELLER')}>Your Orders</button>
            <button className='tablinks' onclick={OrderTabs('CUSTOMER')}>Customer Orders</button>
        </div>
        {/* Seller Orders Section */}
        <div id="SELLER" className='tabcontent'>
            <div className='cards-row mt-2'>
                <div className='cards-container'>
                    <div className='cards-basic secondary-bg m-auto p'>
                        <div className='card-details padding-10'>
                            <p className='f-weight-600'>Order: <span>#1001</span></p>
                            <p>Quantity: <span>150</span></p>
                            <p>Order Date: <span>16-11-22</span></p>
                            <p>Payment Status: <span>Paid</span></p>
                        </div>
                        <a href='' className='cta-link-1 decoration-none padding-10'>More Details
                            <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        {/* Customer Order Details Section */}
        <div id="CUSTOMER" className='tabcontent'>
            <div className='cards-row mt-2'>
                <div className='cards-container'>
                    <div className='cards-basic secondary-bg m-auto p'>
                        <div className='card-details padding-10'>
                            <p>Order #1021</p>
                            <p>Quantity: <span>005</span></p>
                            <p>Order Date: <span>15-11-22</span></p>
                            <p>Payment Status: <span>UPI</span></p>
                        </div>
                        <a href='' className='cta-link-2 decoration-none padding-10'>More Details
                            <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className='bottom-btn'>
            <button className='btn cta-btn-bg-2'>Create New Order</button>
            <button className='btn cta-btn-bg-2'>Order Cylinders</button>
        </div>
    </div>
  );
};

export default OrderCard;