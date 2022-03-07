import React from "react";
import classes from "./bottomNav.module.scss";
import { useNavigate } from "react-router-dom";
const BottomNav = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.container}>
      <div className={classes.navWrapper}>
        <div className={classes.linksWrapper}>
          <div className={classes.links}>Home</div>
          <div className={classes.links}>About Us</div>
          <div className={classes.links}>Services & Schemes</div>
          <div className={classes.links}>Investors Zone</div>
          <div className={classes.links}>Guidelines</div>
          <div className={classes.links}>Policies/Acts</div>
          <div className={classes.links}>Contact Us</div>
          <div className={classes.links}>Quick Links</div>
        </div>

        <div className={classes.loginWrapper}>
          <button onClick={() => navigate("/")} className={classes.loginBtn}>
            Login <i className="fa-solid fa-caret-down"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
