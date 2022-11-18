import { Routes, Route } from "react-router-dom";

import LandingPage from './routes/landing-page/landing-page.component';
import UserProfile from './routes/user-profile/user-profile.component';
import SellerPage from "./routes/seller-page/seller-page.component";
import SellerPanel from "./routes/seller/seller-panel.component";
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}/>
      <Route path="/user-profile" element={<UserProfile />}/>
      <Route path="/seller-page" element={<SellerPage />}/>
      <Route path="/seller" element={<SellerPanel />}/>
    </Routes>
  );
}

export default App;
