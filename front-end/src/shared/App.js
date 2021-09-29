import React from "react";
import { Route } from "react-router";
import "./App.css";
import About from "../pages/About";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MemberHome from "../pages/MemberHome";
import MyPage from "../pages/MyPage";
import Notice from "../pages/Notice";
import FAQ from "../pages/FAQ";
import Planning from "../pages/Planning";
import Registration from "../pages/Registration";
import Reviews from "../pages/Reviews";
import Reviews2 from "../pages/Reviews2";
import UserRecommendation from "../pages/UserRecommendation";

// 테스트용
import Users from "../server/Users";

const App = () => {
  return (
    <div>
      <Route path="/about" component={About} />
      <Route path="/faq" component={FAQ} />
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/memberhome" component={MemberHome} />
      <Route path="/mypage" component={MyPage} />
      <Route path="/notice" component={Notice} />
      <Route path="/planning" component={Planning} />
      <Route path="/registration" component={Registration} />
      <Route path="/reviews" component={Reviews} />
      <Route path="/reviews2" component={Reviews2} />
      <Route path="/userrecommendation" component={UserRecommendation} />
      {/* for test */}
      <Route path="/users" component={Users} />
    </div>
  );
};

export default App;
