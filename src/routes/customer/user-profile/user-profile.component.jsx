import userImage from '../../../assets/user-solid.svg'
import backArrow from '../../../assets/arrow-left-solid.svg'
import activityArrow from '../../../assets/caret-right-solid.svg'
import bookmark from '../../../assets/bookmark-regular.svg'
import notification from '../../../assets/bell-regular.svg'
import settings from '../../../assets/screwdriver-wrench-solid.svg'
import payments from '../../../assets/credit-card-regular.svg'
import orders from '../../../assets/box-open-solid.svg'
import address from '../../../assets/address-book-regular.svg'
import comment from '../../../assets/comment-dots-regular.svg'
import info from '../../../assets/circle-info-solid.svg'


import './user-profile.styles.css'
import { Link } from 'react-router-dom'

const UserProfile = () => {
    return (
        <div className='user-profile-container'>
            {/* User profile container   */}
            <div className="profile-container">
                <div className="text-container">
                    <Link to='/'>
                        <img alt="back-arrow" className='back-arrow' src={backArrow} />
                    </Link>
                    <h3 className='client-name'>Shivam</h3>
                    <span className='view-activity'>View activity
                        <img alt='activity-arrow' src={activityArrow} style={{height: '12px'}}/>
                    </span>
                </div>
                <div className="profile-image-container">
                        <img src={userImage} alt='user-profile-image' className='user-profile-image' />
                </div>
            </div>

            {/* User profile options container */}
            <div className='user-profile-options-container'>
                <hr className='main-option-horizontal-line' />
                <div className="main-options-container">
                    <div className="main-option">
                        <img alt='Bookmarks' src={bookmark} style={{height: '27px'}}/>
                        <span className='main-option-icon-label'>Bookmarks</span>
                    </div>

                    <div className="main-option">
                        <img alt='Notifications' src={notification} style={{height: '27px'}}/>
                        <span className='main-option-icon-label'>Notifications</span>
                    </div>

                    <div className="main-option">
                        <img alt='Settings' src={settings} style={{height: '27px'}}/>
                        <span className='main-option-icon-label'>Settings</span>
                    </div>

                    <div className="main-option">
                        <img alt='Payments' src={payments} style={{height: '27px'}}/>
                        <span className='main-option-icon-label'>Payments</span>
                    </div>
                </div>
                <hr className='main-option-horizontal-line' />
                <p className='other-options-title'>CYLINDER ORDER</p>
                <div className="other-options-container">
                    <Link to='/order-history' className="other-options">
                        <img alt='Your Orders' src={orders} className='other-option-icon'/>
                        <p className='other-option-label'>Your Orders</p>
                    </Link>

                    <div className="other-options">
                        <img alt='Address Book' src={address} className='other-option-icon'/>
                        <p className='other-option-label'>Address Book</p>
                    </div>

                    <div className="other-options">
                        <img alt='Online Ordering Help' src={comment} className='other-option-icon'/>
                        <p className='other-option-label'>Online Ordering Help</p>
                    </div>

                    <div className="other-options">
                        <img alt='About' src={info} className='other-option-icon'/>
                        <p className='other-option-label'>About</p>
                    </div>
                </div>
            </div>
            <div className="extra-options-container">
                <hr style={{color: 'rgb(239, 239, 239)'}} />
                <p className='extra-option'>Send Feedback</p>
                <p className='extra-option'>Rate us on the Play Store</p>
                <p className='extra-option'>Log Out</p>
            </div>
        </div>
    )
}

export default UserProfile;