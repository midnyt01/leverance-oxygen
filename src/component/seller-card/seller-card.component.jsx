import { Link } from "react-router-dom";

import sellerImage from '../../assets/oxygen-seller.jpg'

import './seller-card.styles.css'

const SellerCard = () => {
  return (
    <Link to='/seller-page' className="seller-card">
      <img
        src={sellerImage}
        alt="seller profile picture"
        className="seller-profile-picture"
      />
      <div className="info-container">
        <div className="title-container">
          <h3 className="title">Mahalakshmi Seller</h3>
          <span className="address">Kathgodam</span>
        </div>
        <span className="distance">4 hours | 4 Km</span>
        <hr style={{ margin: "7px 0" }} />
        <p className="some-info"> 100+ orders placed from here recently</p>
      </div>
    </Link>
  );
};

export default SellerCard;
