import React, { Component } from "react";
import { Route } from "react-router";
import "./App.css";
import Home from "../pages/Home";
import About from "../pages/About";
import Registration from "../pages/Registration";
import Login from "../pages/Login";
import MemberHome from "../pages/MemberHome";
import MyPage from "../pages/MyPage";
import Planning from "../pages/Planning";
import Reviews from "../pages/Reviews";
import Notice from "../pages/Notice";
import UserRecommendation from "../pages/UserRecommendation";
import Users from "../server/Users";

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/about" component={About} />
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/memberhome" component={MemberHome} />
        <Route path="/mypage" component={MyPage} />
        <Route path="/notice" component={Notice} />
        <Route path="/planning" component={Planning} />
        <Route path="/registration" component={Registration} />
        <Route path="/reviews" component={Reviews} />
        <Route path="/userrecommendation" component={UserRecommendation} />
        {/* for test */}
        <Route path="/users" component={Users} />
      </div>
    );
  }
}

export default App;
