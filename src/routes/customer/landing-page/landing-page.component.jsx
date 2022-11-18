import Banner from "../../../component/banner/banner.component";
import BottomNav from "../../../component/bottom-nav/bottom-nav.component";
import Map from "../../../component/map/map.component";
import PorductList from "../../../component/product-list/product-list.component";
import SellersList from "../../../component/sellers-list/sellers-list.component";
import Topbar from "../../../component/topbar/topbar.component";

const LandingPage = () => {
  return (
    <div>
      <Topbar/>
      <Banner />
      <PorductList />
      <Map />
      <SellersList />
      {/* <BottomNav /> */}
    </div>
  );
};

export default LandingPage;
