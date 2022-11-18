import './topbar.styles.css'
// import Sidebar from '../sidebar.component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Topbar = () => {
  return (
    <div>
      <div className='container'>
        <div className="nav dark-bg">
          <div className="nav-wrapper m-auto width-90 pt-1">
          {/* <Sidebar /> */}
            <a href='https://github.com' className='cta-btn-text f-size-1'>
              <FontAwesomeIcon icon="fa-solid fa-bars" />
            </a>
            <a href='https://github.com' className='cta-btn-text decoration-none pl-2 f-weight-400 f-size-1'>Seller Panel</a>
            <div className='navbar-right-icons'>
              <a href='https://github.com' className='cta-btn-text f-size-1 pr-2'>
                <FontAwesomeIcon icon="fa-solid fa-bell" />
              </a>
              <a href='https://github.com' className='cta-btn-text f-size-1'>
                <FontAwesomeIcon icon="fa-solid fa-user" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

