// import PersonIcon from '@mui/icons-material/Person';

import { Person } from "@mui/icons-material";

import './topbar.styles.css'

const Topbar = () => {
  return (
    <div>
      <div className="topbar-container">
        <div className="location-container">
          <div>Image</div>
          <span>your location</span>
        </div>
        <div className="user">
          <Person />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
