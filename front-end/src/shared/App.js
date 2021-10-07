import React from "react";
import { Route } from "react-router";
import "./App.css";
import About from "../pages/About";
import AdForAd from "../pages/AdForAd";
import EditProfile from "../pages/EditProfile";
import FAQ from "../pages/FAQ";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MemberHome from "../pages/MemberHome";
import MyDibs from "../pages/MyDibs";
import MyHistory from "../pages/MyHistory";
import MyPage from "../pages/MyPage";
import MyRecommendation from "../pages/MyRecommendation";
import Notice from "../pages/Notice";
import Planning from "../pages/Planning";
import PlanningDetail from "../pages/PlanningDetail";
import PointShop from "../pages/PointShop";
import Registration from "../pages/Registration";
import Result1 from "../pages/Result1";
import Result2 from "../pages/Result2";
import Result3 from "../pages/Result3";
import Reviews from "../pages/Reviews";
import Reviews2 from "../pages/Reviews2";
import SearchPlace from "../pages/SearchPlace";
import UserRecommendation from "../pages/UserRecommendation";

// 테스트용
import Users from "../server/Users";

const App = () => {
  return (
    <div>
      <Route path="/about" component={About} />
      <Route path="/adforad" component={AdForAd} />
      <Route path="/editprofile" component={EditProfile} />
      <Route path="/faq" component={FAQ} />
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/memberhome" component={MemberHome} />
      <Route path="/mydibs" component={MyDibs} />
      <Route path="/myhistory" component={MyHistory} />
      <Route path="/mypage" component={MyPage} />
      <Route path="/myrecommendation" component={MyRecommendation} />
      <Route path="/notice" component={Notice} />
      <Route path="/planning" component={Planning} />
      <Route path="/planningdetail" component={PlanningDetail} />
      <Route path="/pointshop" component={PointShop} />
      <Route path="/registration" component={Registration} />
      <Route path="/result1" component={Result1} />
      <Route path="/result2" component={Result2} />
      <Route path="/result3" component={Result3} />
      <Route path="/reviews" component={Reviews} />
      <Route path="/reviews2" component={Reviews2} />
      <Route path="/searchplace" component={SearchPlace} />
      <Route path="/userrecommendation" component={UserRecommendation} />
      {/* for test */}
      <Route path="/users" component={Users} />
    </div>
  );
};

export default App;
