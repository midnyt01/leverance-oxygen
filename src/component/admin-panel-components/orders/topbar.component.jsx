import './topbar.styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Topbar = () => {
  return (
    <div>
      <div className='container'>
        <div className="nav dark-bg">
          <div className="nav-wrapper m-auto width-90 pt-1">
            <a href='' className='cta-btn-text f-size-1'>
              <FontAwesomeIcon icon="fa-solid fa-bars" />
            </a>
            <a href=""className='cta-btn-text decoration-none pl-2 f-weight-400 f-size-1'>Seller Panel</a>
            <div className='navbar-right-icons'>
              <a href='' className='cta-btn-text f-size-1 pr-2'>
                <FontAwesomeIcon icon="fa-solid fa-bell" />
              </a>
              <a href='' className='cta-btn-text f-size-1'>
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

