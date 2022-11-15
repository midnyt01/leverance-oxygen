import './sellers-list.styles.css'

const SellersList = () => {
    return (
        <div className="sellers-list-container">
            <h2>13 Oxygen Seller Around You</h2>
            <div className="seller-container">
                <div className="seller-card">
                    <img src="" alt='seller profile picture'className='seller-profile-picture' />
                    <div className="info-container">
                        <div className="title-container">
                            <h3 className="title">Mahalakshmi Seller</h3>
                            <span className="address">Kathgodam</span>
                        </div>
                        <span className="distance">4 hours | 4 Km</span>
                        <hr style={{margin: '7px 0'}}/>
                        <p className="some-info"> 100+ orders placed from here recently</p>
                    </div>
                </div>

                <div className="seller-card">
                    <img src="" alt='seller profile picture'className='seller-profile-picture' />
                    <div className="info-container">
                        <div className="title-container">
                            <h3 className="title">Mahalakshmi Seller</h3>
                            <span className="address">Kathgodam</span>
                        </div>
                        <span className="distance">4 hours | 4 Km</span>
                        <hr style={{margin: '7px 0'}}/>
                        <p className="some-info"> 100+ orders placed from here recently</p>
                    </div>
                </div>

                <div className="seller-card">
                    <img src="" alt='seller profile picture'className='seller-profile-picture' />
                    <div className="info-container">
                        <div className="title-container">
                            <h3 className="title">Mahalakshmi Seller</h3>
                            <span className="address">Kathgodam</span>
                        </div>
                        <span className="distance">4 hours | 4 Km</span>
                        <hr style={{margin: '7px 0'}}/>
                        <p className="some-info"> 100+ orders placed from here recently</p>
                    </div>
                </div>

                <div className="seller-card">
                    <img src="" alt='seller profile picture'className='seller-profile-picture' />
                    <div className="info-container">
                        <div className="title-container">
                            <h3 className="title">Mahalakshmi Seller</h3>
                            <span className="address">Kathgodam</span>
                        </div>
                        <span className="distance">4 hours | 4 Km</span>
                        <hr style={{margin: '7px 0'}}/>
                        <p className="some-info"> 100+ orders placed from here recently</p>
                    </div>
                </div>                
            </div>
        </div>
    )
}


export default SellersList;