import {useState} from "react";
import { Link } from 'react-router-dom';
import './topbar.styles.css'
import Sidebar from '../sidebar.component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Topbar = () => {
  const [ isSidenavOpen, setIsSidenavOpen ] = useState(false)
  const sidebarToggle = () => {
    if (isSidenavOpen === false) {
      setIsSidenavOpen(true)
    }
    else {
      setIsSidenavOpen(false)
    }
  }
  return (
    <div>
      <div className='container'>
        <div className="nav dark-bg">
          <div className="nav-wrapper m-auto w-90 pt-1">
          { isSidenavOpen && <Sidebar sidebarToggle={sidebarToggle} /> }
            <span className='cta-btn-text f-size-1' onClick={sidebarToggle}>
              <FontAwesomeIcon icon="fa-solid fa-bars" />
            </span>
            <Link href='https://github.com' className='cta-btn-text decoration-none pl-2 f-weight-400 f-size-1'>Seller Panel</Link>
            <div className='navbar-right-icons'>
              <Link href='https://github.com' className='cta-btn-text f-size-1 pr-2'>
                <FontAwesomeIcon icon="fa-solid fa-bell" />
              </Link>
              <Link href='https://github.com' className='cta-btn-text f-size-1'>
                <FontAwesomeIcon icon="fa-solid fa-user" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

