import { Routes, Route } from "react-router-dom";

import LandingPage from './routes/landing-page/landing-page.component';
import UserProfile from './routes/user-profile/user-profile.component';
import SellerPage from "./routes/seller-page/seller-page.component";

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}/>
      <Route path="/user-profile" element={<UserProfile />}/>
      <Route path="/seller-page" element={<SellerPage />}/>
    </Routes>
  );
}

export default App;
