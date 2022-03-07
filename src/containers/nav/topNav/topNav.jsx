import React from "react";
import classes from "./topNav.module.scss";

const TopNav = () => {
  return (
    <div className={classes.container}>
      <div className={classes.navWrapper}>
        <div className={classes.links}>Skip to Main Content</div>
        <div className={classes.vLine}>|</div>
        <div className={classes.links}>Screen Reader Access</div>
        <div className={classes.vLine}>|</div>
        <div className={classes.links}>
          English{" "}
          <span className={classes.downArrow}>
            <i className="fa-solid fa-caret-down"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
