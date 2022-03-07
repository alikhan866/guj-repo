import React from "react";
import BottomNav from "./bottomNav/bottomNav";
import MiddleNav from "./middleNav/middleNav";
import classes from "./nav.module.scss";
import TopNav from "./topNav/topNav.jsx";

const Nav = () => {
  return (
    <div className={classes.container}>
      <div className={classes.navWrapper}>
        <TopNav />
        <MiddleNav />
        <BottomNav />
      </div>
    </div>
  );
};

export default Nav;
