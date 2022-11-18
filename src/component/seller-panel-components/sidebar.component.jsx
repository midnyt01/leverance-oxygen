import { Link } from 'react-router-dom';

import './sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Sidebar = ({sidebarToggle}) => {
  return (
    <div>
      <div className='sidenav'>
        <ul className='slideout'>
          <span onClick={sidebarToggle} className='sidenav-close f-size-1'>
            <FontAwesomeIcon icon="fa-solid fa-xmark" />
          </span>
          <div className='sidenav-links decoration-none'>
            <li>
              <Link href="/" className='decoration-none primary-text'>
                <span className='mr-2 f-size-1'><FontAwesomeIcon icon="fa-solid fa-house-chimney"/></span>Home
              </Link>
            </li>
            <li>
              <Link href="/" className='decoration-none primary-text'>
                <span className='mr-2 f-size-1'><FontAwesomeIcon icon="fa-solid fa-bag-shopping"/></span>Customer Orders
              </Link>
            </li>
            <li>
              <Link href="/" className='decoration-none primary-text'>
                <span className='mr-2 f-size-1'><FontAwesomeIcon icon="fa-solid fa-boxes-stacked"/></span>Your Order
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;