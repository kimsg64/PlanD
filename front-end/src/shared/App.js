import React from "react";
import { Route } from "react-router";
import "./App.css";
import About from "../pages/About";
import AdForAd from "../pages/AdForAd";
import CompanyForm from "../pages/CompanyForm";
import EditProfile from "../pages/EditProfile";
import FAQ from "../pages/FAQ";
import Home from "../pages/Home";
import IndividualForm from "../pages/IndividualForm";
import Login from "../pages/Login";
import MemberHome from "../pages/MemberHome";
import MyDibs from "../pages/MyDibs";
import MyHistory from "../pages/MyHistory";
import MyPage from "../pages/MyPage";
import MyRecommendation from "../pages/MyRecommendation";
import Planning from "../pages/Planning";
import PointShop from "../pages/PointShop";
import Registration from "../pages/Registration";
import Result from "../pages/Result";
import Reviews from "../pages/Reviews";
import SearchPlace from "../pages/SearchPlace";
import UserRecommendation from "../pages/UserRecommendation";

const App = () => {
  return (
    <div id="page-layout">
      <Route path="/about" component={About} />
      <Route path="/adforad" component={AdForAd} />
      <Route path="/companyform" component={CompanyForm} />
      <Route path="/editprofile" component={EditProfile} />
      <Route path="/faq" component={FAQ} />
      <Route exact path="/" component={Home} />
      <Route path="/individualfrom" component={IndividualForm} />
      <Route path="/login" component={Login} />
      <Route path="/memberhome" component={MemberHome} />
      <Route path="/mydibs" component={MyDibs} />
      <Route path="/myhistory" component={MyHistory} />
      <Route path="/mypage" component={MyPage} />
      <Route path="/myrecommendation" component={MyRecommendation} />
      <Route exact path="/planning" component={Planning} />
      <Route path="/planning/:date" component={Planning} />
      <Route path="/pointshop" component={PointShop} />
      <Route path="/registration" component={Registration} />
      <Route path="/result" component={Result} />
      <Route path="/reviews" component={Reviews} />
      <Route path="/searchplace" component={SearchPlace} />
      <Route path="/userrecommendation" component={UserRecommendation} />
    </div>
  );
};

export default App;
