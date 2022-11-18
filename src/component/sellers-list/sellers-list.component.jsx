import SearchBox from '../search-box/search-box.component';
import SellerCard from '../seller-card/seller-card.component';
import './sellers-list.styles.css'

const SellersList = () => {
    return (
        <div className="sellers-list-container">
            <h2>13 Oxygen Seller Around You</h2>
            <SearchBox />
            <div className="seller-container">
                <SellerCard />        
                <SellerCard />    
                <SellerCard />    
                <SellerCard />    
                <SellerCard />    
                <SellerCard />    
                <SellerCard />           
            </div>
        </div>
    )
}


export default SellersList;