import './topbar.styles.css'

import user from '../../assets/user-regular.svg'
import location from '../../assets/location-dot-solid.svg'

const Topbar = () => {
  return (
    <div>
      <div className="topbar-container">
        <div className="location-container">
          <img src={location} alt='location' style={{width: '25px', height: '25px'}} />
          <span className='my-location'>My location</span>
        </div>
        <div className="user">
          <img src={user} alt='user' style={{width: '25px', height: '25px'}}/>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
