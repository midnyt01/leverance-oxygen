import { Link } from 'react-router-dom';

import user from '../../assets/user-regular.svg'
import location from '../../assets/location-dot-solid.svg'

import './topbar.styles.css'

const Topbar = () => {
  return (
    <div>
      <div className="topbar-container">
        <div className="location-container">
          <img src={location} alt='location' style={{width: '25px', height: '25px'}} />
          <span className='my-location'>My location</span>
        </div>
        <Link to='/user-profile' className="user">
          <img src={user} alt='user' style={{width: '25px', height: '25px'}}/>
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
